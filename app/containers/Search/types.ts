import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface SearchState {
  query: string;
}

/* --- ACTIONS --- */
type SearchActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = SearchState;
type ContainerActions = SearchActions;

export { ContainerState, ContainerActions };
