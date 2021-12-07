/*
 *
 * Filters
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import {
  getAuthorFiltersAction,
  getGenreFiltersAction,
  getNumberOfAwardsFiltersAction,
  setSelectedAuthor,
  setSelectedGenre,
} from './actions';

import makeSelectFilters, {
  makeSelectAuthorFilters,
  makeSelectGenreFilters,
  makeSelectNumberOfAwardsFilters,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Search from 'containers/Search';
import BookDropdown from 'components/BookDropdown';
import { FilterType } from './types';

const stateSelector = createStructuredSelector({
  filters: makeSelectFilters(),
  authors: makeSelectAuthorFilters(),
  genres: makeSelectGenreFilters(),
  numberOfAwards: makeSelectNumberOfAwardsFilters(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Filters(props: Props) {
  useInjectReducer({ key: 'filters', reducer: reducer });
  useInjectSaga({ key: 'filters', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { filters, authors, genres, numberOfAwards } = useSelector(
    stateSelector,
  );
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  console.log('Autori', authors);
  console.log('Genres', genres);
  console.log('Number of awards', numberOfAwards);
  useEffect(() => {
    dispatch(getAuthorFiltersAction('ang'));
    dispatch(getGenreFiltersAction());
    dispatch(getNumberOfAwardsFiltersAction());
  }, []);
  return (
    <div>
      <Search />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '1rem' }}>Authors:</div>
          <BookDropdown
            options={
              authors.length !== 0
                ? authors.map(({ key }: FilterType) => key)
                : []
            }
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '1rem' }}>Genres:</div>
          <BookDropdown
            options={
              genres.length !== 0
                ? genres.map(({ key }: FilterType) => key)
                : []
            }
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '1rem' }}>Number of awards:</div>
          <BookDropdown
            options={
              numberOfAwards.length !== 0
                ? numberOfAwards.map(({ key }: FilterType) => key)
                : []
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
