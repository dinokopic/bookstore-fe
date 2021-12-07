import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface FilterType {
  key: string;
  doc_count: number;
}

/* --- STATE --- */
interface FiltersState {
  authors: Array<FilterType>;
  genres: Array<FilterType>;
  numberOfAwards: Array<FilterType>;
  selectedAuthor: string;
  selectedGenre: string;
  selectedNumberOfAwards: string;
}

/* --- ACTIONS --- */
type FiltersActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = FiltersState;
type ContainerActions = FiltersActions;

export { ContainerState, ContainerActions };
