/*
 *
 * Filters reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  authors: [],
  genres: [],
  numberOfAwards: [],
  selectedAuthor: '',
  selectedGenre: '',
  selectedNumberOfAwards: '',
};

function filtersReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.DEFAULT_ACTION:
      return state;
    case ActionTypes.GET_FILTERS:
      return state;
    case ActionTypes.SET_FILTERS:
      return action.payload;
    case ActionTypes.GET_AUTHOR_FILTERS:
      return state;
    case ActionTypes.SET_AUTHOR_FILTERS:
      return { ...state, authors: action.payload };
    case ActionTypes.GET_GENRE_FILTERS:
      return state;
    case ActionTypes.SET_GENRE_FILTERS:
      return { ...state, genres: action.payload };
    case ActionTypes.GET_NUMBER_OF_AWARDS_FILTERS:
      return state;
    case ActionTypes.SET_NUMBER_OF_AWARDS_FILTERS:
      return { ...state, numberOfAwards: action.payload };
    case ActionTypes.GET_SELECTED_AUTHOR:
      return state;
    case ActionTypes.SET_SELECTED_AUTHOR:
      return { ...state, selectedAuthor: action.payload };
    case ActionTypes.GET_SELECTED_GENRE:
      return state;
    case ActionTypes.SET_SELECTED_GENRE:
      return { ...state, selectedGenre: action.payload };
    case ActionTypes.GET_SELECTED_NUMBER_OF_AWARDS:
      return state;
    case ActionTypes.SET_SELECTED_NUMBER_OF_AWARDS:
      return { ...state, selectedNumberOfAwards: action.payload };
    default:
      return state;
  }
}

export default filtersReducer;
