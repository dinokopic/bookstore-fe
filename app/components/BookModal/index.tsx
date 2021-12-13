/**
 *
 * BookModal
 *
 */
import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Book } from "types";
import "./customCss.css";

// import styled from 'styles/styled-components';

interface Props {
  selectedBook?: Book;
  modal: boolean;
  toggle: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookModal(props: Props) {
  const { selectedBook, modal, toggle } = props;

  return (
    <div>
      <Modal
        className="bookModal"
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 100 }}
      >
        <ModalHeader className="bookModalHeader" toggle={toggle}>
          {selectedBook?.title}
        </ModalHeader>
        <ModalBody className="bookModalBody">
          <div>
            <img src={selectedBook?.img_url} className="bookModalBodyImage" />
          </div>
          <div className={"description"}>
            <div className="bookModalMainContent">
              <b>Written by:</b> {selectedBook?.author}
              <br />
              <b>Genre:</b> {selectedBook?.genre.join(", ")}
            </div>
            <br />
            {selectedBook?.category.length !== 0 && (
              <>
                <b>Category:</b> {selectedBook?.category.join(", ")}
                <br />
              </>
            )}
            <b>Year of release:</b> {selectedBook?.year}
            <br />
            <b>Number of pages:</b> {selectedBook?.number_of_pages}
            <br />
            <b>Number of copies sold:</b> {selectedBook?.sold}
            <br />
            {selectedBook?.awards.length !== 0 && (
              <>
                <b>Awards Won:</b>
                <ul>
                  {selectedBook?.awards.map((award) => (
                    <li>{award}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="bookModalPrice">
              <b>Price:</b> {"$" + selectedBook?.price}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default BookModal;
