import { categoriesReducer, CATEGORIES_INITIAL_STATE } from '../categories.reducer';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from '../categories.action';

describe('category reducer test', () => {
  test('fetch category start', () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };
    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())).toEqual(
      expectedState
    );
  });

  test('fetch category success', () => {
    const mockData = [
      {
        title: 'mens',
        imageUrl: 'htttps...',
        items: [
          { id: 1, name: 'product 1' },
          { id: 2, name: 'product 2' },
        ],
      },
      {
        title: 'womens',
        imageUrl: 'htttps...2',
        items: [
          { id: 3, name: 'product 3' },
          { id: 4, name: 'product 4' },
        ],
      },
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData,
    };

    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesSuccess(mockData))
    ).toEqual(expectedState);
  });

  test('fetch categories failed', () => {
    const mockError = new Error('error fetching categories');
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };
    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesFailed(mockError))
    ).toEqual(expectedState);
  });
});
