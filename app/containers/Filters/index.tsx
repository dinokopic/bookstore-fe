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
    dispatch(getGenreFiltersAction());
    dispatch(getNumberOfAwardsFiltersAction());
    dispatch(getSearchResults());
  }, [selectedAuthor]);

  useEffect(() => {
    dispatch(getAuthorFiltersAction());
    dispatch(getNumberOfAwardsFiltersAction());
    dispatch(getSearchResults());
  }, [selectedGenre]);

  useEffect(() => {
    dispatch(getAuthorFiltersAction());
    dispatch(getGenreFiltersAction());
    dispatch(getSearchResults());
  }, [selectedNumberOfAwards]);

  return (
    <div>
      <Search />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "1rem" }}>Authors:</div>
          <BookDropdown
            isRadio={true}
            options={authors.map(({ key }: FilterType) => key)}
            handleOnClick={(selectedAuthor) => {
              dispatch(setSelectedAuthor(selectedAuthor));
            }}
            optionsCount={authors.map(({ doc_count }: FilterType) => doc_count)}
            selectedOption={selectedAuthor}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "1rem" }}>Genres:</div>
          <BookDropdown
            isRadio={true}
            options={genres.map(({ key }: FilterType) => key)}
            handleOnClick={(selectedGenre) => {
              dispatch(setSelectedGenre(selectedGenre));
            }}
            optionsCount={genres.map(({ doc_count }: FilterType) => doc_count)}
            selectedOption={selectedGenre}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "1rem" }}>Number of awards:</div>
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
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
