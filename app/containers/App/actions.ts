import { action } from "typesafe-actions";

import ActionTypes from "./constants";
import { Repo } from "../RepoListItem/types";
import { Page } from "./reducer";

export const loadRepos = () => action(ActionTypes.LOAD_REPOS);
export const reposLoaded = (repos: Repo[], username: string) =>
  action(ActionTypes.LOAD_REPOS_SUCCESS, { repos: repos, username: username });
export const repoLoadingError = (error: object) =>
  action(ActionTypes.LOAD_REPOS_ERROR, error);
export const getSelectedPage = () => action(ActionTypes.GET_SELECTED_PAGE);
export const setSelectedPage = (selectedPage: Page) =>
  action(ActionTypes.SET_SELECTED_PAGE, selectedPage);
