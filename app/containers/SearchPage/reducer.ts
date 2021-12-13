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
  loading: false,
  error: false,
};

function searchPageReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.DEFAULT_ACTION:
      return state;
    case ActionTypes.GET_SEARCH_RESULTS:
      return { ...state, loading: true, error: false };
    case ActionTypes.GET_SEARCH_RESULTS_ERROR:
      return { ...state, loading: false, error: true };
    case ActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.searchResults,
        totalHits: action.payload.totalHits,
        loading: false,
        error: false,
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
