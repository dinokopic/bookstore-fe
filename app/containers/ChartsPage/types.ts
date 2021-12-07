import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

/* --- STATE --- */
interface ChartsPageState {
  readonly default: any;
}

/* --- ACTIONS --- */
type ChartsPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = ChartsPageState;
type ContainerActions = ChartsPageActions;

export { ContainerState, ContainerActions };
