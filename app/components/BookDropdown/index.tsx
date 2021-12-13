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

import "./customCss.css";

interface Props {
  handleOnClick?: any;
  options: Array<string>;
  optionsCount?: Array<number>;
  selectedOption?: string;
  isRadio: boolean;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookDropdown(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const {
    handleOnClick,
    options,
    optionsCount,
    isRadio,
    selectedOption,
    className,
  } = props;

  return (
    <div className="dropdownHolder">
      <Dropdown
        isOpen={isOpen}
        toggle={toggle}
        setActiveFromChild={true}
        style={{ width: "100%" }}
      >
        <DropdownToggle caret className={className || ""}>
          {props.selectedOption && props.selectedOption !== ""
            ? props.selectedOption
            : "All"}
        </DropdownToggle>
        <DropdownMenu left ar>
          {options.map((option, index) => {
            return (
              <DropdownItem
                onClick={() => {
                  if (selectedOption !== option) {
                    if (handleOnClick) {
                      handleOnClick(option);
                    }
                  } else if (isRadio) {
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
