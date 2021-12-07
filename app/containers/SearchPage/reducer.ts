/*
 *
 * SearchPage reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  searchResults: [],
};

function searchPageReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.DEFAULT_ACTION:
      return state;
    case ActionTypes.GET_SEARCH_RESULTS:
      return state;
    case ActionTypes.SET_SEARCH_RESULTS:
      return { searchResults: action.payload };
    default:
      return state;
  }
}

export default searchPageReducer;
