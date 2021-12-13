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
  makeSelectSearchPageError,
  makeSelectSearchPageLoading,
  makeSelectSearchResults,
  makeSelectSearchTotalHits,
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Filters from "containers/Filters";
import BookList from "components/BookList";
import { getSearchResults, setCurrentPage } from "./actions";
import BookPagination from "components/BookPagination";
import { Spinner } from "reactstrap";

import "./customCss.css";
import { setSelectedPage } from "containers/App/actions";
import { Page } from "containers/App/reducer";
import { calculateNumberOfPages, PAGE_SIZE } from "utils/pagination";

const stateSelector = createStructuredSelector({
  searchPage: makeSelectSearchPage(),
  searchResults: makeSelectSearchResults(),
  totalHits: makeSelectSearchTotalHits(),
  currentPage: makeSelectSearchPageCurrentPage(),
  loading: makeSelectSearchPageLoading(),
  error: makeSelectSearchPageError(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SearchPage(props: Props) {
  useInjectReducer({ key: "searchPage", reducer: reducer });
  useInjectSaga({ key: "searchPage", saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    searchPage,
    searchResults,
    totalHits,
    currentPage,
    loading,
    error,
  } = useSelector(stateSelector);

  const numberOfPages = calculateNumberOfPages(totalHits, PAGE_SIZE);

  useEffect(() => {
    dispatch(setSelectedPage(Page.search));
  }, []);

  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  useEffect(() => {
    dispatch(getSearchResults());
  }, [currentPage]);
  return (
    <div>
      <Filters onFilterChanged={() => dispatch(getSearchResults())} />
      <hr />
      {loading && (
        <div className="spinnerHolder">
          <Spinner />
        </div>
      )}
      {!loading && searchResults.length == 0 && (
        <div className="emptySearchResponse">NO RESULTS</div>
      )}
      {!loading && searchResults.length > 0 && (
        <div>
          <BookList books={searchResults} />
          <BookPagination
            numberOfPages={numberOfPages}
            handlePageChange={(newPage: number) => {
              dispatch(setCurrentPage(newPage));
            }}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}

export default SearchPage;
