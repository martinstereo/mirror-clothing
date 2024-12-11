import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => (
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
)

export const fetchCategoriesSuccess = (categoryArray) => (
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoryArray)
)

export const fetchCategoriesFailed = (error) => (
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
)

export const fetchCategoriesAsync = () => {
    return async (dispatch) => {
        (fetchCategoriesStart())
        try {
            const categoriesArray = await getCategoriesAndDocuments()
            fetchCategoriesSuccess(categoriesArray);
            dispatch(fetchCategoriesSuccess(categoriesArray))
        } catch (error) {
            dispatch(fetchCategoriesFailed(error))
        }
    }
}