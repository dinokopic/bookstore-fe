/*
 *
 * ChartsPage
 *
 */

import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer, useInjectSaga } from "redux-injectors";

import makeSelectChartsPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

// Register modules,
// this example for time scale and linear scale
const stateSelector = createStructuredSelector({
  chartsPage: makeSelectChartsPage(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ChartsPage(props: Props) {
  useInjectReducer({ key: "chartsPage", reducer: reducer });
  useInjectSaga({ key: "chartsPage", saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { chartsPage } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return <div></div>;
}

export default ChartsPage;
