import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the filters state domain
 */

const selectFiltersDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Filters
 */

const makeSelectFilters = () =>
  createSelector(selectFiltersDomain, substate => substate.filters);

const makeSelectAuthorFilters = () =>
  createSelector(selectFiltersDomain, substate => substate.filters.authors);

const makeSelectGenreFilters = () =>
  createSelector(selectFiltersDomain, substate => substate.filters.genres);

const makeSelectNumberOfAwardsFilters = () =>
  createSelector(
    selectFiltersDomain,
    substate => substate.filters.numberOfAwards,
  );

const makeSelectAuthor = () =>
  createSelector(
    selectFiltersDomain,
    substate => substate.filters.selectedAuthor,
  );

const makeSelectGenre = () =>
  createSelector(
    selectFiltersDomain,
    substate => substate.filters.selectedGenre,
  );

const makeSelectNumberOfAwards = () =>
  createSelector(
    selectFiltersDomain,
    substate => substate.filters.selectedNumberOfAwards,
  );

export default makeSelectFilters;
export {
  selectFiltersDomain,
  makeSelectAuthor,
  makeSelectGenre,
  makeSelectNumberOfAwards,
  makeSelectAuthorFilters,
  makeSelectGenreFilters,
  makeSelectNumberOfAwardsFilters,
};
