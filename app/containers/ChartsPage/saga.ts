import { take, call, put, select, takeLatest } from "redux-saga/effects";
import request from "utils/request";
import {
  setBestSellingBooksData,
  setBestSellingGenresData,
  setPriceData,
  setProfitData,
} from "./actions";
import ActionTypes from "./constants";

const requestURL = "http://localhost:9000/charts/";

export function* getPriceData() {
  const response = yield call(request, requestURL + "price");
  yield put(setPriceData(response));
}

export function* getProfitData() {
  const response = yield call(request, requestURL + "profit");
  yield put(setProfitData(response));
}

export function* getBestSellingGenreData() {
  const response = yield call(request, requestURL + "bestSellingGenres");
  yield put(setBestSellingGenresData(response));
}

export function* getBestSellingBooksData() {
  const response = yield call(request, requestURL + "bestSellingBooks");
  yield put(setBestSellingBooksData(response));
}
// Individual exports for testing
export default function* chartsPageSaga() {
  yield takeLatest(ActionTypes.GET_PRICE_DATA, getPriceData);
  yield takeLatest(ActionTypes.GET_PROFIT_DATA, getProfitData);
  yield takeLatest(
    ActionTypes.GET_BEST_SELLING_GENRES_DATA,
    getBestSellingGenreData
  );
  yield takeLatest(
    ActionTypes.GET_BEST_SELLING_BOOKS_DATA,
    getBestSellingBooksData
  );

  // See example in containers/HomePage/saga.js
}
