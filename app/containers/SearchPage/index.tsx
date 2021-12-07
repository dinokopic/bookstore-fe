/*
 *
 * SearchPage
 *
 */

import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectSearchPage, { makeSelectSearchResults } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Filters from 'containers/Filters';
import BookList from 'components/BookList';
import { getSearchResults } from './actions';

const stateSelector = createStructuredSelector({
  searchPage: makeSelectSearchPage(),
  searchResults: makeSelectSearchResults(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SearchPage(props: Props) {
  useInjectReducer({ key: 'searchPage', reducer: reducer });
  useInjectSaga({ key: 'searchPage', saga: saga });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { searchPage, searchResults } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  useEffect(() => {
    dispatch(getSearchResults());
  }, []);
  return (
    <div>
      <Filters />
      <hr />
      <BookList books={searchResults} />
    </div>
  );
}

export default SearchPage;
