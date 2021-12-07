/**
 *
 * BookDropdown
 *
 */
import React, { useState } from "react";

// import styled from 'styles/styled-components';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

interface Props {
  handleOnClick?: any;
  options: Array<string>;
  optionsCount?: Array<number>;
  selectedOption?: string;
  isRadio: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookDropdown(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState(props.selectedOption);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const { handleOnClick, options, optionsCount, isRadio } = props;

  return (
    <div>
      <Dropdown isOpen={isOpen} toggle={toggle} setActiveFromChild={true}>
        <DropdownToggle caret>{selectedOption}</DropdownToggle>
        <DropdownMenu left ar>
          {options.map((option, index) => {
            return (
              <DropdownItem
                onClick={() => {
                  if (selectedOption !== option) {
                    setSelectedOption(option);
                    if (handleOnClick) {
                      handleOnClick(option);
                    }
                  } else if (isRadio) {
                    setSelectedOption(undefined);
                    if (handleOnClick) {
                      handleOnClick("");
                    }
                  }
                }}
                active={selectedOption === option ? true : false}
              >
                {option}
                {optionsCount && " (" + optionsCount[index] + ")"}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default BookDropdown;
