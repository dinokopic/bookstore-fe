/*
 *
 * SearchPage reducer
 *
 */

import ActionTypes from "./constants";
import { ContainerState, ContainerActions } from "./types";

export const initialState: ContainerState = {
  searchResults: [],
  totalHits: 0,
  currentPage: 0,
};

function searchPageReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.DEFAULT_ACTION:
      return state;
    case ActionTypes.GET_SEARCH_RESULTS:
      return state;
    case ActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.searchResults,
        totalHits: action.payload.totalHits,
      };
    case ActionTypes.GET_CURRENT_PAGE:
      return state;
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export default searchPageReducer;
