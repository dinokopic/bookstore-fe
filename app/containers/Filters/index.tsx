/*
 *
 * Filters
 *
 */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer, useInjectSaga } from "redux-injectors";
import {
  getAuthorFiltersAction,
  getGenreFiltersAction,
  getNumberOfAwardsFiltersAction,
  setAuthorFiltersAction,
  setSelectedAuthor,
  setSelectedGenre,
  setSelectedNumberOfAwards,
} from "./actions";

import makeSelectFilters, {
  makeSelectAuthor,
  makeSelectAuthorFilters,
  makeSelectGenre,
  makeSelectGenreFilters,
  makeSelectNumberOfAwards,
  makeSelectNumberOfAwardsFilters,
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Search from "containers/Search";
import BookDropdown from "components/BookDropdown";
import { FilterType } from "./types";
import { getSearchResults } from "containers/SearchPage/actions";

import "./customCss.css";

const stateSelector = createStructuredSelector({
  filters: makeSelectFilters(),
  authors: makeSelectAuthorFilters(),
  genres: makeSelectGenreFilters(),
  numberOfAwards: makeSelectNumberOfAwardsFilters(),
  selectedAuthor: makeSelectAuthor(),
  selectedGenre: makeSelectGenre(),
  selectedNumberOfAwards: makeSelectNumberOfAwards(),
});

interface Props {
  onFilterChanged?: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Filters(props: Props) {
  useInjectReducer({ key: "filters", reducer: reducer });
  useInjectSaga({ key: "filters", saga: saga });
  const { onFilterChanged } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    filters,
    authors,
    genres,
    numberOfAwards,
    selectedAuthor,
    selectedGenre,
    selectedNumberOfAwards,
  } = useSelector(stateSelector);

  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    dispatch(getAuthorFiltersAction());
    dispatch(getGenreFiltersAction());
    dispatch(getNumberOfAwardsFiltersAction());
    dispatch(getSearchResults());
  }, []);

  const removeFilters = () => {
    dispatch(setSelectedAuthor(""));
    dispatch(setSelectedGenre(""));
    dispatch(setSelectedNumberOfAwards(""));
  };

  return (
    <div>
      <div className="heading">
        <div className="searchHeading">
          <h3>Search</h3>
        </div>
        <div className="filtersHeading">
          <div>
            <h3>Filters</h3>
          </div>
          <button className="removeFiltersButton" onClick={removeFilters}>
            Remove all
          </button>
        </div>
      </div>
      <div className="segmentGrid">
        <div className="searchSegment">
          <Search />
        </div>
        <div className="authorFiltersHolder">
          <div className="authorFiltersLabel">Authors:</div>
          <BookDropdown
            isRadio={true}
            options={authors.map(({ key }: FilterType) => key)}
            handleOnClick={(selectedAuthor) => {
              console.log("KLIK NA DROPDOWN ZA AUTORA");
              dispatch(setSelectedAuthor(selectedAuthor));
            }}
            optionsCount={authors.map(({ doc_count }: FilterType) => doc_count)}
            selectedOption={selectedAuthor}
            className="authorDropdown"
          />
        </div>
        <div className="genreFiltersHolder">
          <div className="genreFiltersLabel">Genres:</div>
          <BookDropdown
            isRadio={true}
            options={genres.map(({ key }: FilterType) => key)}
            handleOnClick={(selectedGenre) => {
              dispatch(setSelectedGenre(selectedGenre));
            }}
            optionsCount={genres.map(({ doc_count }: FilterType) => doc_count)}
            selectedOption={selectedGenre}
            className="genreDropdown"
          />
        </div>
        <div className="numberOfAwardsFiltersHolder">
          <div className="numberOfAwardsFiltersLabel">Number of awards:</div>
          <BookDropdown
            isRadio={true}
            options={numberOfAwards.map(({ key }: FilterType) => key)}
            handleOnClick={(selectedNumberOfAwards) => {
              dispatch(setSelectedNumberOfAwards(selectedNumberOfAwards));
            }}
            optionsCount={numberOfAwards.map(
              ({ doc_count }: FilterType) => doc_count
            )}
            selectedOption={selectedNumberOfAwards}
            className="numberOfAwardsDropdown"
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
