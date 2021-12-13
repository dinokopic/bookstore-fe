/**
 *
 * BookPagination
 *
 */
import React from "react";

// import styled from 'styles/styled-components';

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import "./customCss.css";

interface Props {
  numberOfPages: number;
  handlePageChange: any;
  currentPage: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookPagination(props: Props) {
  const { numberOfPages, handlePageChange, currentPage } = props;

  return (
    <div className="paginationHolder">
      <Pagination>
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            previous
            href="#"
          />
        </PaginationItem>

        {[...Array(numberOfPages)].map((page, i) => (
          <PaginationItem active={i === currentPage} key={i}>
            <PaginationLink
              onClick={() => {
                handlePageChange(i);
              }}
              href="#"
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage >= numberOfPages - 1}>
          <PaginationLink
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
            next
            href="#"
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default BookPagination;
