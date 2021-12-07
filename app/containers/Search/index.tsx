/*
 *
 * Search
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'redux-injectors';

import makeSelectSearch, { makeSelectQuery } from './selectors';
import reducer from './reducer';
import messages from './messages';
import { setSearchQuery } from './actions';
import {
  getAuthorFiltersAction,
  getFiltersAction,
  getGenreFiltersAction,
  getNumberOfAwardsFiltersAction,
} from 'containers/Filters/actions';

const stateSelector = createStructuredSelector({
  search: makeSelectSearch(),
  query: makeSelectQuery(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Search(props: Props) {
  useInjectReducer({ key: 'search', reducer: reducer });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { search, query } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(getAuthorFiltersAction(''));
          dispatch(getGenreFiltersAction());
          dispatch(getNumberOfAwardsFiltersAction());
        }}
      >
        Unesi:
        <input
          type="text"
          onChange={event => {
            dispatch(setSearchQuery(event.target.value));
          }}
        />
      </form>
    </div>
  );
}

export default Search;
