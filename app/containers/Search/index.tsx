/*
 *
 * Search
 *
 */

import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
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
import { InputGroup } from "reactstrap";
import Input from "containers/HomePage/Input";
import Button from "components/Button";

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
    <div style={{ display: "flex" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        Enter the title:
        <input
          type="text"
          onChange={(event) => {
            dispatch(setSearchQuery(event.target.value));
          }}
          value={query}
        />
      </form>
      <button onClick={() => dispatch(setSearchQuery(""))}>Reset</button>
    </div>
  );
}

export default Search;
