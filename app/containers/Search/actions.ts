/*
 *
 * Search actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';

export const defaultAction = () => action(ActionTypes.DEFAULT_ACTION);

export const getSearchQuery = () => action(ActionTypes.GET_SEARCH_QUERY);

export const setSearchQuery = (query: string) =>
  action(ActionTypes.SET_SEARCH_QUERY, query);
