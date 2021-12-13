import { Book } from "types";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

interface RequestType {
  title: string;
  author: string;
  genre: string;
  number_of_awards: string;
}

/* --- STATE --- */
interface SearchPageState {
  searchResults: Array<Book>;
  totalHits: number;
  currentPage: number;
  loading: boolean;
  error: boolean;
}

/* --- ACTIONS --- */
type SearchPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = SearchPageState;
type ContainerActions = SearchPageActions;

export { ContainerState, ContainerActions, RequestType };
