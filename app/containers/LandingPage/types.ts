import { Book } from "types";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

enum OrderByCategory {
  popular = "Popular",
  latest = "Latest",
}

/* --- STATE --- */
interface LandingPageState {
  popularBooks: Array<Book>;
  latestBooks: Array<Book>;
  totalHits: number;
  selectedCategory: OrderByCategory;
  currentPage: number;
  loading: boolean;
  error: boolean;
}

/* --- ACTIONS --- */
type LandingPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = LandingPageState;
type ContainerActions = LandingPageActions;

export { ContainerState, ContainerActions, OrderByCategory };
