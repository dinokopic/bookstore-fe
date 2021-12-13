import { createSelector } from "reselect";
import { ApplicationRootState } from "types";
import { initialState } from "./reducer";

/**
 * Direct selector to the chartsPage state domain
 */

const selectChartsPageDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ChartsPage
 */

const makeSelectChartsPage = () =>
  createSelector(selectChartsPageDomain, (substate) => substate);

const makeSelectChartsPagePriceData = () =>
  createSelector(
    selectChartsPageDomain,
    (substate) => substate.chartsPage.priceData
  );

const makeSelectChartsPageProfitData = () =>
  createSelector(
    selectChartsPageDomain,
    (substate) => substate.chartsPage.profitData
  );

const makeSelectChartsPageBestSellingGenreData = () =>
  createSelector(
    selectChartsPageDomain,
    (substate) => substate.chartsPage.bestSellingGenresData
  );

const makeSelectChartsPageBestSellingBooksData = () =>
  createSelector(
    selectChartsPageDomain,
    (substate) => substate.chartsPage.bestSellingBooksData
  );

export default makeSelectChartsPage;
export {
  selectChartsPageDomain,
  makeSelectChartsPagePriceData,
  makeSelectChartsPageProfitData,
  makeSelectChartsPageBestSellingGenreData,
  makeSelectChartsPageBestSellingBooksData,
};
