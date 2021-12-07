/**
 *
 * BookDropdown
 *
 */
import React, { useState } from 'react';

// import styled from 'styles/styled-components';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

interface Props {
  handleOnClick?: any;
  options: Array<string>;
  optionsCount?: Array<number>;
  selectedOption?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookDropdown(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState(props.selectedOption);
  const toggle = () => setIsOpen(prevState => !prevState);
  const { handleOnClick, options } = props;
  //  console.log(options);
  return (
    <div>
      <Dropdown isOpen={isOpen} toggle={toggle} setActiveFromChild={true}>
        <DropdownToggle caret>{selectedOption}</DropdownToggle>
        <DropdownMenu left ar>
          {options.map(option => {
            return (
              <DropdownItem
                onClick={() => {
                  if (selectedOption !== option) {
                    setSelectedOption(option);
                    if (handleOnClick) {
                      handleOnClick(option);
                    }
                  }
                }}
                active={selectedOption === option ? true : false}
              >
                {option}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default BookDropdown;
