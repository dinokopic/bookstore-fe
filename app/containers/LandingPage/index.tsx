/*
 *
 * LandingPage
 *
 */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { OrderByCategory } from "./types";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

import "./customCss.css";

import makeSelectLandingPage, {
  makeSelectLandingPagePopularBooks,
  makeSelectLandingPageLatestBooks,
  makeSelectLandingPageTotalHits,
  makeSelectLandingPageSelectedCategory,
  makeSelectLandingPageCurrentPage,
  makeSelectLandingPageLoading,
  makeSelectLandingPageError,
} from "./selectors";

import reducer from "./reducer";
import saga from "./saga";
import {
  getBooks,
  getLatestBooks,
  setCurrentPage,
  setSelectedCategory,
} from "./actions";
import BookList from "components/BookList";
import BookPagination from "components/BookPagination";
import BookDropdown from "components/BookDropdown";
import { Spinner } from "reactstrap";
import { setSelectedPage } from "containers/App/actions";
import { Page } from "containers/App/reducer";
import { calculateNumberOfPages, PAGE_SIZE } from "utils/pagination";

const stateSelector = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
  popularBooks: makeSelectLandingPagePopularBooks(),
  latestBooks: makeSelectLandingPageLatestBooks(),
  totalHits: makeSelectLandingPageTotalHits(),
  selectedCategory: makeSelectLandingPageSelectedCategory(),
  currentPage: makeSelectLandingPageCurrentPage(),
  loading: makeSelectLandingPageLoading(),
  error: makeSelectLandingPageError(),
});

interface Props {}

const categories = ["Popular", "Latest"];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LandingPage(props: Props) {
  useInjectReducer({ key: "landingPage", reducer: reducer });
  useInjectSaga({ key: "landingPage", saga: saga });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    landingPage,
    popularBooks,
    latestBooks,
    totalHits,
    selectedCategory,
    currentPage,
    loading,
    error,
  } = useSelector(stateSelector);

  const numberOfPages = calculateNumberOfPages(totalHits, PAGE_SIZE);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    dispatch(setSelectedPage(Page.home));
  }, []);

  useEffect(() => {
    dispatch(getBooks(currentPage, PAGE_SIZE));
    dispatch(getLatestBooks(currentPage, PAGE_SIZE));
  }, [currentPage]);

  const handleOptionClick = (option: string) => {
    if (option === OrderByCategory.popular) {
      dispatch(setSelectedCategory(OrderByCategory.popular));
    } else {
      dispatch(setSelectedCategory(OrderByCategory.latest));
    }
  };

  return (
    <div>
      <Helmet>
        <title>LandingPage</title>
        <meta name="description" content="Description of LandingPage" />
      </Helmet>
      <div className="landingPageHeading">
        <h3>Books we offer</h3>
        <div className="orderByDropdown">
          <div style={{ marginRight: "1rem" }}>Order by:</div>
          <BookDropdown
            isRadio={false}
            handleOnClick={(option: string) => handleOptionClick(option)}
            options={[OrderByCategory.popular, OrderByCategory.latest]}
            selectedOption={selectedCategory}
          />
        </div>
      </div>
      <hr />
      {loading && (
        <div className="spinnerHolder">
          <Spinner />
        </div>
      )}
      {!loading && (
        <div>
          {selectedCategory === OrderByCategory.popular && (
            <BookList books={popularBooks} />
          )}
          {selectedCategory === OrderByCategory.latest && (
            <BookList books={latestBooks} />
          )}
          <BookPagination
            numberOfPages={numberOfPages}
            handlePageChange={(pageNumber: number) => {
              dispatch(setCurrentPage(pageNumber));
            }}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}

export default LandingPage;
