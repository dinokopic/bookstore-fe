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

export default makeSelectChartsPage;
export { selectChartsPageDomain };
