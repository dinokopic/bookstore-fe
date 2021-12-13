import { createSelector } from "reselect";
import { ApplicationRootState } from "types";
import { initialState } from "./reducer";

/**
 * Direct selector to the landingPage state domain
 */

const selectLandingPageDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LandingPage
 */

const makeSelectLandingPage = () =>
  createSelector(selectLandingPageDomain, (substate) => substate.landingPage);

const makeSelectLandingPagePopularBooks = () =>
  createSelector(
    selectLandingPageDomain,
    (substate) => substate.landingPage.popularBooks
  );

const makeSelectLandingPageLatestBooks = () =>
  createSelector(
    selectLandingPageDomain,
    (substate) => substate.landingPage.latestBooks
  );

const makeSelectLandingPageTotalHits = () =>
  createSelector(
    selectLandingPageDomain,
    (substate) => substate.landingPage.totalHits
  );

const makeSelectLandingPageSelectedCategory = () =>
  createSelector(
    selectLandingPageDomain,
    (substate) => substate.landingPage.selectedCategory
  );

const makeSelectLandingPageCurrentPage = () =>
  createSelector(
    selectLandingPageDomain,
    (substate) => substate.landingPage.currentPage
  );

const makeSelectLandingPageLoading = () =>
  createSelector(
    selectLandingPageDomain,
    (substate) => substate.landingPage.loading
  );

const makeSelectLandingPageError = () =>
  createSelector(
    selectLandingPageDomain,
    (substate) => substate.landingPage.error
  );

export default makeSelectLandingPage;
export {
  selectLandingPageDomain,
  makeSelectLandingPagePopularBooks,
  makeSelectLandingPageLatestBooks,
  makeSelectLandingPageTotalHits,
  makeSelectLandingPageSelectedCategory,
  makeSelectLandingPageCurrentPage,
  makeSelectLandingPageLoading,
  makeSelectLandingPageError,
};
