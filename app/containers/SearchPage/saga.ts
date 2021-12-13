import {
  makeSelectAuthor,
  makeSelectGenre,
  makeSelectNumberOfAwards,
} from "containers/Filters/selectors";
import ActionTypes from "./constants";
import FilterActionTypes from "../Filters/constants";
import { makeSelectQuery } from "containers/Search/selectors";
import { take, call, put, select, takeLatest } from "redux-saga/effects";
import { queryCreator } from "utils/query-creator";
import request from "utils/request";
import { setCurrentPage, setSearchResults } from "./actions";
import { makeSelectSearchPageCurrentPage } from "./selectors";

const requestURL = "http://localhost:9000/books/search";

export function* getSearchResults() {
  const title = yield select(makeSelectQuery());
  const author = yield select(makeSelectAuthor());
  const genre = yield select(makeSelectGenre());
  const numberOfAwards = yield select(makeSelectNumberOfAwards());
  const page = yield select(makeSelectSearchPageCurrentPage());

  let urlQuery = queryCreator({ title, author, genre, numberOfAwards, page });
  const { books, totalHits } = yield call(request, requestURL + urlQuery);
  if (books.length === 0 && totalHits !== 0) {
    yield put(setCurrentPage(0));
  } else {
    yield put(setSearchResults(books, totalHits));
  }
}

// Individual exports for testing
export default function* searchPageSaga() {
  yield takeLatest(ActionTypes.GET_SEARCH_RESULTS, getSearchResults);
  yield takeLatest(FilterActionTypes.SET_SELECTED_AUTHOR, getSearchResults);
  yield takeLatest(FilterActionTypes.SET_SELECTED_GENRE, getSearchResults);
  yield takeLatest(
    FilterActionTypes.SET_SELECTED_NUMBER_OF_AWARDS,
    getSearchResults
  );
  // See example in containers/HomePage/saga.js
}
