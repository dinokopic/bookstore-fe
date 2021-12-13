/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styles/styled-components";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { createStructuredSelector } from "reselect";

import HomePage from "containers/HomePage/Loadable";
import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Header from "components/Header";
import Footer from "components/Footer";

import GlobalStyle from "../../global-styles";
import LandingPage from "containers/LandingPage";
import Filters from "containers/Filters";
import SearchPage from "containers/SearchPage";
import ChartsPage from "containers/ChartsPage";
import { makeSelectSelectedPage } from "./selectors";
import { useSelector } from "react-redux";

const AppWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  padding-top: 16px;
  flex-direction: column;
`;

const stateSelector = createStructuredSelector({
  selectedPage: makeSelectSelectedPage(),
});

function App() {
  const { selectedPage } = useSelector(stateSelector);
  console.log(selectedPage);
  return (
    <>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header selectedPage={selectedPage} />
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/charts" component={ChartsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppWrapper>
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default hot(App);
