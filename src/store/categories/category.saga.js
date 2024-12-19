
// Saga
import { takeLatest, all, call, put } from "redux-saga/effects"

// Firebase utils
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"

// Redux
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categories.action"
import { CATEGORIES_ACTION_TYPES } from "./categories.types"



export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
    fetchCategoriesSuccess(categoriesArray);
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  )
}


export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}
