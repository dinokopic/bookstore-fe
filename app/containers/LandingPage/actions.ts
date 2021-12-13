/*
 *
 * LandingPage actions
 *
 */

import { action } from "typesafe-actions";
import { OrderByCategory } from "./types";

import ActionTypes from "./constants";
import { Book } from "types";

export const defaultAction = () => action(ActionTypes.DEFAULT_ACTION);

export const getBooks = (currentPage: number, pageSize: number) => {
  return action(ActionTypes.GET_BOOKS, { page: currentPage, size: pageSize });
};

export const getBooksError = () => {
  return action(ActionTypes.GET_BOOKS_ERROR);
};

export const setBooks = (books: Array<Book>, totalHits: number) =>
  action(ActionTypes.SET_BOOKS, { books, totalHits });

export const getLatestBooks = (currentPage: number, pageSize: number) =>
  action(ActionTypes.GET_LATEST_BOOKS, { page: currentPage, size: pageSize });

export const getLatestBooksError = () =>
  action(ActionTypes.GET_LATEST_BOOKS_ERROR);

export const setLatestBooks = (books: Array<Book>, totalHits: number) =>
  action(ActionTypes.SET_LATEST_BOOKS, { books, totalHits });

export const getSelectedCategory = () =>
  action(ActionTypes.GET_SELECTED_CATEGORY);

export const setSelectedCategory = (selectedCategory: OrderByCategory) =>
  action(ActionTypes.SET_SELECTED_CATEGORY, selectedCategory);

export const getCurrentPage = () => action(ActionTypes.GET_CURRENT_PAGE);

export const setCurrentPage = (currentPage: number) =>
  action(ActionTypes.SET_CURRENT_PAGE, currentPage);
