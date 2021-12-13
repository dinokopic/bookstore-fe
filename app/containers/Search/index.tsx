/*
 *
 * Search
 *
 */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer } from "redux-injectors";

import makeSelectSearch, { makeSelectQuery } from "./selectors";
import reducer from "./reducer";
import { setSearchQuery } from "./actions";
import {
  getAuthorFiltersAction,
  getGenreFiltersAction,
  getNumberOfAwardsFiltersAction,
} from "containers/Filters/actions";
import { getSearchResults } from "containers/SearchPage/actions";
import "./customCss.css";

const stateSelector = createStructuredSelector({
  search: makeSelectSearch(),
  query: makeSelectQuery(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Search(props: Props) {
  useInjectReducer({ key: "search", reducer: reducer });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { search, query } = useSelector(stateSelector);

  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    dispatch(getAuthorFiltersAction());
    dispatch(getGenreFiltersAction());
    dispatch(getNumberOfAwardsFiltersAction());
    dispatch(getSearchResults());
  }, [query]);

  return (
    <div className="searchHolder">
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          className="searchInput"
          onChange={(event) => {
            dispatch(setSearchQuery(event.target.value));
          }}
          value={query}
          placeholder="Enter title"
        />
      </form>
    </div>
  );
}

export default Search;
