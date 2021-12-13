import { call, put, takeLatest } from "@redux-saga/core/effects";
import { queryCreator } from "utils/query-creator";
import request from "utils/request";
import { setBooks, setLatestBooks } from "./actions";
import ActionTypes from "./constants";

const requestURL = "http://localhost:9000/books/";

export function* getBooks(action: any) {
  const { page, size } = action.payload;
  const response = yield call(
    request,
    requestURL +
      "popular" +
      queryCreator({
        page,
        size,
      })
  );
  yield put(setBooks(response.books, response.totalHits));
}

export function* getLatestBooks(action: any) {
  const { page, size } = action.payload;
  const response = yield call(
    request,
    requestURL +
      "latest" +
      queryCreator({
        page,
        size,
      })
  );
  yield put(setLatestBooks(response.books, response.totalHits));
}

// Individual exports for testing
export default function* landingPageSaga() {
  yield takeLatest(ActionTypes.GET_BOOKS, getBooks);
  yield takeLatest(ActionTypes.GET_LATEST_BOOKS, getLatestBooks);
  // See example in containers/HomePage/saga.js
}
