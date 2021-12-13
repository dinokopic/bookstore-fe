/*
 *
 * ChartsPage actions
 *
 */

import { action } from "typesafe-actions";
import {
  BestSellingBookData,
  BestSellingGenreData,
  PriceData,
  ProfitData,
} from "./types";

import ActionTypes from "./constants";

export const defaultAction = () => action(ActionTypes.DEFAULT_ACTION);

export const getPriceData = () => action(ActionTypes.GET_PRICE_DATA);

export const setPriceData = (priceData: Array<PriceData>) =>
  action(ActionTypes.SET_PRICE_DATA, priceData);

export const getProfitData = () => action(ActionTypes.GET_PROFIT_DATA);

export const setProfitData = (profitData: Array<ProfitData>) =>
  action(ActionTypes.SET_PROFIT_DATA, profitData);

export const getBestSellingGenresData = () =>
  action(ActionTypes.GET_BEST_SELLING_GENRES_DATA);

export const setBestSellingGenresData = (
  bestSellingGenreData: Array<BestSellingGenreData>
) => action(ActionTypes.SET_BEST_SELLING_GENRES_DATA, bestSellingGenreData);

export const getBestSellingBooksData = () =>
  action(ActionTypes.GET_BEST_SELLING_BOOKS_DATA);

export const setBestSellingBooksData = (
  bestSellingBooksData: Array<BestSellingBookData>
) => action(ActionTypes.SET_BEST_SELLING_BOOKS_DATA, bestSellingBooksData);
