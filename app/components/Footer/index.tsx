import * as React from "react";
import { FormattedMessage } from "react-intl";

import A from "components/A";
import LocaleToggle from "containers/LocaleToggle";
import Wrapper, { FooterWrapper } from "./Wrapper";
import messages from "./messages";

function Footer() {
  return (
    <Wrapper>
      <FooterWrapper>
        <section>
          <FormattedMessage {...messages.licenseMessage} />
        </section>
        <section>
          Created by <A href="https://github.com/dinokopic">Dino Kopic</A>.
        </section>
      </FooterWrapper>
    </Wrapper>
  );
}

export default Footer;
