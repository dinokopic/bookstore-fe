import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { ConnectedRouter } from "connected-react-router";
import { createMemoryHistory } from "history";

import Header from "../index";
import configureStore from "../../../configureStore";
import { Page } from "containers/App/reducer";

describe("<Header />", () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it("should render a div", () => {
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ConnectedRouter history={history}>
            <Header selectedPage={Page.home} />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
