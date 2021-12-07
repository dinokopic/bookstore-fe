/*
 *
 * Search reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  query: '',
};

function searchReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_SEARCH_QUERY:
      return state;
    case ActionTypes.SET_SEARCH_QUERY:
      return { query: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
