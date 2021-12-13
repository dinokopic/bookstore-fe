import { makeSelectQuery } from "containers/Search/selectors";
import { Action } from "redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import { PayloadAction } from "typesafe-actions";
import { queryCreator } from "utils/query-creator";
import request from "utils/request";
import {
  setAuthorFiltersAction,
  setGenreFiltersAction,
  setNumberOfAwardsFiltersAction,
} from "./actions";
import ActionTypes from "./constants";
import makeSelectFilters, {
  makeSelectAuthor,
  makeSelectGenre,
  makeSelectNumberOfAwards,
  selectFiltersDomain,
} from "./selectors";

const requestURL = "http://localhost:9000/books/filters/";

export function* getAuthorFilters() {
  const title = yield select(makeSelectQuery());
  const genre = yield select(makeSelectGenre());
  const numberOfAwards = yield select(makeSelectNumberOfAwards());
  const urlQuery = queryCreator({
    title,
    genre,
    numberOfAwards,
  });
  const authorFilters = yield call(request, requestURL + "author" + urlQuery);
  yield put(setAuthorFiltersAction(authorFilters));
}

export function* getGenreFilters() {
  const title = yield select(makeSelectQuery());
  const author = yield select(makeSelectAuthor());
  const numberOfAwards = yield select(makeSelectNumberOfAwards());
  const urlQuery = queryCreator({ title, author, numberOfAwards });
  const genreFilters = yield call(request, requestURL + "genre" + urlQuery);
  console.log("FETCHED GENRES", genreFilters);
  yield put(setGenreFiltersAction(genreFilters));
}

export function* getNumberOfAwardsFilters() {
  const title = yield select(makeSelectQuery());
  const author = yield select(makeSelectAuthor());
  const genre = yield select(makeSelectGenre());
  const urlQuery = queryCreator({ title, author, genre });
  const numberOfAwardsFilters = yield call(
    request,
    requestURL + "numberOfAwards" + urlQuery
  );
  yield put(setNumberOfAwardsFiltersAction(numberOfAwardsFilters));
}

export function* selectedAuthorChanged(author: any) {
  yield call(getGenreFilters);
  yield call(getNumberOfAwardsFilters);
}

export function* selectedGenreChanged() {
  yield call(getAuthorFilters);
  yield call(getNumberOfAwardsFilters);
}

export function* selectedNumberOfAwardsChanged() {
  yield call(getAuthorFilters);
  yield call(getGenreFilters);
}

// Individual exports for testing
export default function* filtersSaga() {
  yield takeLatest(ActionTypes.GET_AUTHOR_FILTERS, getAuthorFilters);
  yield takeLatest(ActionTypes.GET_GENRE_FILTERS, getGenreFilters);
  yield takeLatest(
    ActionTypes.GET_NUMBER_OF_AWARDS_FILTERS,
    getNumberOfAwardsFilters
  );
  yield takeLatest(ActionTypes.SET_SELECTED_AUTHOR, selectedAuthorChanged);
  yield takeLatest(ActionTypes.SET_SELECTED_GENRE, selectedGenreChanged);
  yield takeLatest(
    ActionTypes.SET_SELECTED_NUMBER_OF_AWARDS,
    selectedNumberOfAwardsChanged
  );
  // See example in containers/HomePage/saga.js
}
