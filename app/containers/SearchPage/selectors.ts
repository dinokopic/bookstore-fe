import { createSelector } from "reselect";
import { ApplicationRootState } from "types";
import { initialState } from "./reducer";

/**
 * Direct selector to the searchPage state domain
 */

const selectSearchPageDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchPage
 */

const makeSelectSearchPage = () =>
  createSelector(selectSearchPageDomain, (substate) => substate);

const makeSelectSearchResults = () =>
  createSelector(
    selectSearchPageDomain,
    (substate) => substate.searchPage.searchResults
  );

const makeSelectSearchTotalHits = () =>
  createSelector(
    selectSearchPageDomain,
    (substate) => substate.searchPage.totalHits
  );

const makeSelectSearchPageCurrentPage = () =>
  createSelector(
    selectSearchPageDomain,
    (substate) => substate.searchPage.currentPage
  );

export default makeSelectSearchPage;
export {
  selectSearchPageDomain,
  makeSelectSearchResults,
  makeSelectSearchTotalHits,
  makeSelectSearchPageCurrentPage,
};
