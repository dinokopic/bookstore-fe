/*
 *
 * LandingPage reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions, OrderByCategory } from './types';

export const initialState: ContainerState = {
  popularBooks: [],
  latestBooks: [],
  totalHits: 0,
  selectedCategory: OrderByCategory.popular,
};

function landingPageReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.DEFAULT_ACTION:
      return state;
    case ActionTypes.GET_BOOKS:
      return state;
    case ActionTypes.SET_BOOKS:
      console.log('OVO JE U SET_BOOKS REDUCERU', action.payload);
      return {
        ...state,
        popularBooks: action.payload.books,
        totalHits: action.payload.totalHits,
      };
    case ActionTypes.GET_LATEST_BOOKS:
      console.log(state);
      return state;
    case ActionTypes.SET_LATEST_BOOKS:
      console.log('OVO JA PAYLOAD', action.payload.books);
      console.log({
        ...state,
        latestBooks: action.payload.books,
        totalHits: action.payload.totalHits,
      });
      return {
        ...state,
        latestBooks: action.payload.books,
        totalHits: action.payload.totalHits,
      };
    case ActionTypes.GET_SELECTED_CATEGORY:
      return state;
    case ActionTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
}

export default landingPageReducer;
