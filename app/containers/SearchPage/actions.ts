/*
 *
 * SearchPage actions
 *
 */

import { action } from "typesafe-actions";
import { RequestType } from "./types";

import ActionTypes from "./constants";
import { Book } from "types";

export const defaultAction = () => action(ActionTypes.DEFAULT_ACTION);

export const getSearchResults = () => action(ActionTypes.GET_SEARCH_RESULTS);

export const setSearchResults = (
  searchResults: Array<Book>,
  totalHits: number
) => action(ActionTypes.SET_SEARCH_RESULTS, { searchResults, totalHits });

export const getCurrentPage = () => action(ActionTypes.GET_CURRENT_PAGE);

export const setCurrentPage = (newPage: number) =>
  action(ActionTypes.SET_CURRENT_PAGE, newPage);
