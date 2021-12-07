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

import makeSelectLandingPage, {
  makeSelectLandingPagePopularBooks,
  makeSelectLandingPageLatestBooks,
  makeSelectLandingPageTotalHits,
  makeSelectLandingPageSelectedCategory,
} from "./selectors";

import reducer from "./reducer";
import saga from "./saga";
import {
  getBooks,
  getLatestBooks,
  setLatestBooks,
  setSelectedCategory,
} from "./actions";
import BookList from "components/BookList";
import BookPagination from "components/BookPagination";
import BookDropdown from "components/BookDropdown";

const stateSelector = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
  popularBooks: makeSelectLandingPagePopularBooks(),
  latestBooks: makeSelectLandingPageLatestBooks(),
  totalHits: makeSelectLandingPageTotalHits(),
  selectedCategory: makeSelectLandingPageSelectedCategory(),
});

interface Props {}

const categories = ["Popular", "Latest"];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LandingPage(props: Props) {
  useInjectReducer({ key: "landingPage", reducer: reducer });
  useInjectSaga({ key: "landingPage", saga: saga });
  const pageSize = 12;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    landingPage,
    popularBooks,
    latestBooks,
    totalHits,
    selectedCategory,
  } = useSelector(stateSelector);
  const numberOfPages =
    totalHits % pageSize == 0
      ? Math.floor(totalHits / pageSize)
      : Math.floor(totalHits / pageSize) + 1;
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    dispatch(getBooks(0, pageSize));
    dispatch(getLatestBooks(0, pageSize));
  }, []);

  const handleOptionClick = (option: string) => {
    if (option === OrderByCategory.popular) {
      dispatch(setSelectedCategory(OrderByCategory.popular));
    } else {
      dispatch(setSelectedCategory(OrderByCategory.latest));
    }
  };
  /*
  useEffect(() => {
    if (selectedOption == 'Popular') {
      dispatch(getBooks(currentPage, pageSize));
    } else {
      dispatch(getLatestBooks(currentPage, pageSize));
    }
  }, [currentPage]);
*/
  return (
    <div>
      <Helmet>
        <title>LandingPage</title>
        <meta name="description" content="Description of LandingPage" />
      </Helmet>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "1rem" }}>Order by:</div>
        <BookDropdown
          isRadio={false}
          handleOnClick={(option: string) => handleOptionClick(option)}
          options={[OrderByCategory.popular, OrderByCategory.latest]}
          selectedOption={OrderByCategory.popular}
        />
      </div>
      <hr />
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
            dispatch(getBooks(pageNumber, pageSize));
            dispatch(getLatestBooks(pageNumber, pageSize));
          }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
