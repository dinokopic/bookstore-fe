import { makeSelectAuthor } from 'containers/Filters/selectors';
import ActionTypes from './constants';
import { makeSelectQuery } from 'containers/Search/selectors';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { queryCreator } from 'utils/query-creator';
import request from 'utils/request';
import { setSearchResults } from './actions';

const requestURL = 'http://localhost:9000/books/search';

export function* getSearchResults() {
  const title = yield select(makeSelectQuery());
  const author = yield select(makeSelectAuthor());
  //const genre = yield select(makeSelectGenre())
  //

  const urlQuery = queryCreator({ title, author });
  const searchResults = yield call(request, requestURL + urlQuery);
  yield put(setSearchResults(searchResults));
}

// Individual exports for testing
export default function* searchPageSaga() {
  yield takeLatest(ActionTypes.GET_SEARCH_RESULTS, getSearchResults);
  // See example in containers/HomePage/saga.js
}
