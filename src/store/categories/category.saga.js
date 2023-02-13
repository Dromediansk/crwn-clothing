import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import {
  fetchCategoriesError,
  fetchCategoriesSuccess,
} from "./category.action";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesError(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
