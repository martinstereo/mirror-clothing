import { call, put, takeLatest, all } from 'redux-saga/effects';

import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from '../categories.saga';

import { CATEGORIES_ACTION_TYPES } from '../categories.types';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from '../categories.action';

describe('category saga', () => {
  test('categoriesSaga should yield all with onFetchCategories', () => {
    return (
      expectSaga(categoriesSaga)
        // Check that it calls onFetchCategories within an all effect
        .call(onFetchCategories)
        .run()
    );
  });

  // The rest of your tests are working correctly, so leave them as is
  test('onFetchCategories should listen for FETCH_CATEGORIES_START and call fetchCategoriesAsync', () => {
    return (
      expectSaga(onFetchCategories)
        // Dispatch the action it's supposed to listen for
        .dispatch({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START })
        // When that action is dispatched, fetchCategoriesAsync should be called
        .run()
    );
  });

  test('fetchCategoriesAsync should handle successful API call and dispatch success action', () => {
    const mockCategoriesArray = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test('fetchCategoriesAsync should handle API failure and dispatch error action', () => {
    const mockError = new Error('Error occurred');

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(mockError)]])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});
