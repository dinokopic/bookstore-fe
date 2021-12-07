/*
 *
 * SearchPage
 *
 */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer, useInjectSaga } from "redux-injectors";

import makeSelectSearchPage, {
  makeSelectSearchPageCurrentPage,
  makeSelectSearchResults,
  makeSelectSearchTotalHits,
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Filters from "containers/Filters";
import BookList from "components/BookList";
import { getCurrentPage, getSearchResults, setCurrentPage } from "./actions";
import BookPagination from "components/BookPagination";

const stateSelector = createStructuredSelector({
  searchPage: makeSelectSearchPage(),
  searchResults: makeSelectSearchResults(),
  totalHits: makeSelectSearchTotalHits(),
  currentPage: makeSelectSearchPageCurrentPage(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SearchPage(props: Props) {
  useInjectReducer({ key: "searchPage", reducer: reducer });
  useInjectSaga({ key: "searchPage", saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { searchPage, searchResults, totalHits, currentPage } = useSelector(
    stateSelector
  );

  const pageSize = 12;
  const numberOfPages =
    totalHits % pageSize == 0
      ? Math.floor(totalHits / pageSize)
      : Math.floor(totalHits / pageSize) + 1;

  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  useEffect(() => {
    dispatch(getSearchResults());
  }, [currentPage]);
  return (
    <div>
      <Filters onFilterChanged={() => dispatch(getSearchResults())} />
      <hr />
      <BookList books={searchResults} />
      <BookPagination
        numberOfPages={numberOfPages}
        handlePageChange={(newPage: number) => {
          console.log("PAGE CHANGE");
          dispatch(setCurrentPage(newPage));
        }}
      />
    </div>
  );
}

export default SearchPage;
