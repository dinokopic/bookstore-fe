/*
 *
 * Filters actions
 *
 */

import { action } from 'typesafe-actions';
import { FilterType } from './types';

import ActionTypes from './constants';
import { ContainerState } from './types';

export const defaultAction = () => action(ActionTypes.DEFAULT_ACTION);

export const getFiltersAction = () => action(ActionTypes.GET_FILTERS);

export const setFiltersAction = (filters: ContainerState) =>
  action(ActionTypes.SET_FILTERS, filters);

export const getAuthorFiltersAction = (title: String) =>
  action(ActionTypes.GET_AUTHOR_FILTERS, title);

export const setAuthorFiltersAction = (authorFilters: Array<FilterType>) =>
  action(ActionTypes.SET_AUTHOR_FILTERS, authorFilters);

export const getGenreFiltersAction = () =>
  action(ActionTypes.GET_GENRE_FILTERS);

export const setGenreFiltersAction = (genreFilters: Array<FilterType>) =>
  action(ActionTypes.SET_GENRE_FILTERS, genreFilters);

export const getNumberOfAwardsFiltersAction = () =>
  action(ActionTypes.GET_NUMBER_OF_AWARDS_FILTERS);

export const setNumberOfAwardsFiltersAction = (
  numberOfAwardsFilters: Array<FilterType>,
) => action(ActionTypes.SET_NUMBER_OF_AWARDS_FILTERS, numberOfAwardsFilters);

export const getSelectedAuthor = () => action(ActionTypes.GET_SELECTED_AUTHOR);

export const setSelectedAuthor = (author: string) =>
  action(ActionTypes.SET_SELECTED_AUTHOR, author);

export const getSelectedGenre = () => action(ActionTypes.GET_SELECTED_GENRE);

export const setSelectedGenre = (genre: string) =>
  action(ActionTypes.SET_SELECTED_GENRE, genre);

export const getSelectedNumberOfAwards = () =>
  action(ActionTypes.GET_SELECTED_NUMBER_OF_AWARDS);

export const setSelectedNumberOfAwards = (numberOfAwards: string) =>
  action(ActionTypes.SET_SELECTED_NUMBER_OF_AWARDS, numberOfAwards);
