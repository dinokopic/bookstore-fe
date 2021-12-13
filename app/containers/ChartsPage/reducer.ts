/*
 *
 * ChartsPage reducer
 *
 */

import ActionTypes from "./constants";
import { ContainerState, ContainerActions } from "./types";

export const initialState: ContainerState = {
  priceData: [],
  profitData: [],
  bestSellingGenresData: [],
  bestSellingBooksData: [],
};

function chartsPageReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.DEFAULT_ACTION:
      return state;
    case ActionTypes.GET_PRICE_DATA:
      return state;
    case ActionTypes.SET_PRICE_DATA:
      return { ...state, priceData: action.payload };
    case ActionTypes.GET_PROFIT_DATA:
      return state;
    case ActionTypes.SET_PROFIT_DATA:
      return { ...state, profitData: action.payload };
    case ActionTypes.GET_BEST_SELLING_GENRES_DATA:
      return state;
    case ActionTypes.SET_BEST_SELLING_GENRES_DATA:
      return { ...state, bestSellingGenresData: action.payload };
    case ActionTypes.GET_BEST_SELLING_BOOKS_DATA:
      return state;
    case ActionTypes.SET_BEST_SELLING_BOOKS_DATA:
      return { ...state, bestSellingBooksData: action.payload };
    default:
      return state;
  }
}

export default chartsPageReducer;
