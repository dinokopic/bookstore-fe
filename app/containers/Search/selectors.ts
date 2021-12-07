import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the search state domain
 */

const selectSearchDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Search
 */

const makeSelectSearch = () =>
  createSelector(selectSearchDomain, substate => substate.search);

const makeSelectQuery = () =>
  createSelector(selectSearchDomain, substate => substate.search.query);

export default makeSelectSearch;
export { selectSearchDomain, makeSelectQuery };
