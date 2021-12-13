import * as React from "react";
import { FormattedMessage } from "react-intl";

import A from "./A";
import Img from "./Img";
import NavBar from "./NavBar";
import HeaderLink from "./HeaderLink";
import Banner from "./newBanner.jpg";
import messages from "./messages";
import "./customCss.css";
import { Page } from "containers/App/reducer";
import { useDispatch } from "react-redux";
import { setSelectedPage } from "containers/App/actions";

interface Props {
  selectedPage: Page;
}

function Header(props: Props) {
  const { selectedPage } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <Img src={Banner} alt="react-boilerplate - Logo" />
      <NavBar className="navBar">
        <HeaderLink
          className={`navItem ${selectedPage === Page.home && "navItemActive"}`}
          to="/"
        >
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink
          className={`navItem ${
            selectedPage === Page.search && "navItemActive"
          }`}
          to="/search"
        >
          Search
        </HeaderLink>
        <HeaderLink
          className={`navItem ${
            selectedPage === Page.charts && "navItemActive"
          }`}
          to="/charts"
        >
          Charts
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
