import { ContainerState, ContainerActions } from "./types";
import ActionTypes from "./constants";

export enum Page {
  home = "home",
  search = "search",
  charts = "charts",
}
// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,
  currentUser: "",
  userData: {
    repos: [],
  },
  selectedPage: Page.home,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_REPOS:
      return {
        ...state,
        currentUser: state.currentUser,
        loading: true,
        error: false,
        userData: {
          repos: [],
        },
      };
    case ActionTypes.LOAD_REPOS_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.username,
        loading: false,
        error: state.error,
        userData: {
          repos: action.payload.repos,
        },
      };
    case ActionTypes.LOAD_REPOS_ERROR:
      const { error, loading, ...rest } = state;
      return {
        error: action.payload,
        loading: false,
        ...rest,
      };
    case ActionTypes.GET_SELECTED_PAGE:
      return state;
    case ActionTypes.SET_SELECTED_PAGE:
      return {
        ...state,
        selectedPage: action.payload,
      };
    default:
      return state;
  }
}

export default appReducer;
