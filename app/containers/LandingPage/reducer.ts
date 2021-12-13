/*
 *
 * LandingPage reducer
 *
 */

import ActionTypes from "./constants";
import { ContainerState, ContainerActions, OrderByCategory } from "./types";

export const initialState: ContainerState = {
  popularBooks: [],
  latestBooks: [],
  totalHits: 0,
  selectedCategory: OrderByCategory.popular,
  currentPage: 0,
  loading: false,
  error: false,
};

function landingPageReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.DEFAULT_ACTION:
      return state;
    case ActionTypes.GET_BOOKS:
      return { ...state, loading: true, error: false };
    case ActionTypes.GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ActionTypes.SET_BOOKS:
      return {
        ...state,
        popularBooks: action.payload.books,
        totalHits: action.payload.totalHits,
        loading: false,
        error: false,
      };
    case ActionTypes.GET_LATEST_BOOKS:
      return { ...state, loading: true, error: false };
    case ActionTypes.GET_LATEST_BOOKS_ERROR:
      return { ...state, loading: false, error: true };
    case ActionTypes.SET_LATEST_BOOKS:
      return {
        ...state,
        latestBooks: action.payload.books,
        totalHits: action.payload.totalHits,
        loading: false,
        error: false,
      };
    case ActionTypes.GET_SELECTED_CATEGORY:
      return state;
    case ActionTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case ActionTypes.GET_CURRENT_PAGE:
      return state;
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export default landingPageReducer;
