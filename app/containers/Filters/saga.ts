import { makeSelectQuery } from 'containers/Search/selectors';
import { Action } from 'redux';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { PayloadAction } from 'typesafe-actions';
import { queryCreator } from 'utils/query-creator';
import request from 'utils/request';
import {
  setAuthorFiltersAction,
  setGenreFiltersAction,
  setNumberOfAwardsFiltersAction,
} from './actions';
import ActionTypes from './constants';
import makeSelectFilters, {
  makeSelectAuthor,
  makeSelectGenre,
  makeSelectNumberOfAwards,
  selectFiltersDomain,
} from './selectors';

const requestURL = 'http://localhost:9000/books/filters/';

export function* getAuthorFilters(action: PayloadAction<string, string>) {
  console.log('GET AUTHOR FILTERS');
  const title = yield select(makeSelectQuery());
  const genre = yield select(makeSelectGenre());
  const numberOfAwards = yield select(makeSelectNumberOfAwards());
  const urlQuery = queryCreator({
    title,
    genre,
    numberOfAwards,
  });
  const authorFilters = yield call(request, requestURL + 'author' + urlQuery);
  console.log(authorFilters);
  yield put(setAuthorFiltersAction(authorFilters));
}

export function* getGenreFilters(action: PayloadAction<string, string>) {
  console.log('GET GENRE FILTERS');
  const title = yield select(makeSelectQuery());
  const author = yield select(makeSelectAuthor());
  const numberOfAwards = yield select(makeSelectNumberOfAwards());
  const urlQuery = queryCreator({ title, author, numberOfAwards });
  const genreFilters = yield call(request, requestURL + 'genre' + urlQuery);
  console.log(genreFilters);
  yield put(setGenreFiltersAction(genreFilters));
}

export function* getNumberOfAwardsFilters(
  action: PayloadAction<string, string>,
) {
  console.log('GET NUMBER OF AWARDS FILTERS');
  const title = yield select(makeSelectQuery());
  const author = yield select(makeSelectAuthor());
  const genre = yield select(makeSelectGenre());
  const urlQuery = queryCreator({ title, author, genre });
  const numberOfAwardsFilters = yield call(
    request,
    requestURL + 'numberOfAwards' + urlQuery,
  );
  console.log(numberOfAwardsFilters);
  yield put(setNumberOfAwardsFiltersAction(numberOfAwardsFilters));
}

// Individual exports for testing
export default function* filtersSaga() {
  yield takeLatest(ActionTypes.GET_AUTHOR_FILTERS, getAuthorFilters);
  yield takeLatest(ActionTypes.GET_GENRE_FILTERS, getGenreFilters);
  yield takeLatest(
    ActionTypes.GET_NUMBER_OF_AWARDS_FILTERS,
    getNumberOfAwardsFilters,
  );
  // See example in containers/HomePage/saga.js
}
