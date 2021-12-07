/**
 *
 * BookPagination
 *
 */
import React, { useState } from 'react';

// import styled from 'styles/styled-components';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface Props {
  numberOfPages: number;
  handlePageChange: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookPagination(props: Props) {
  const { numberOfPages, handlePageChange } = props;
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Pagination>
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink
            onClick={() => {
              handlePageChange(currentPage - 1);
              setCurrentPage(currentPage - 1);
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
                setCurrentPage(i);
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
              setCurrentPage(currentPage + 1);
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
