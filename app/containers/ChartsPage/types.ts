import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

interface PriceData {
  key: number;
  doc_count: number;
}

interface ProfitData {
  title: string;
  profit: number;
}

interface BestSellingBookData {
  title: string;
  sold: number;
}

interface BestSellingGenreData {
  key: string;
  doc_count: number;
  soldByGenre: { value: string };
}

/* --- STATE --- */
interface ChartsPageState {
  priceData: Array<PriceData>;
  profitData: Array<ProfitData>;
  bestSellingGenresData: Array<BestSellingGenreData>;
  bestSellingBooksData: Array<BestSellingBookData>;
}

/* --- ACTIONS --- */
type ChartsPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = ChartsPageState;
type ContainerActions = ChartsPageActions;

export {
  ContainerState,
  ContainerActions,
  PriceData,
  ProfitData,
  BestSellingGenreData,
  BestSellingBookData,
};
