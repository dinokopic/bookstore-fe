/**
 *
 * BookList
 *
 */
import React from 'react';

// import styled from 'styles/styled-components';

import { FormattedMessage } from 'react-intl';
import './customCss.css';
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';
import { Book } from 'types';
import messages from './messages';

interface Props {
  books: Array<Book>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookList(props: Props) {
  // Modal open state
  const [modal, setModal] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState<Book>();

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  console.log('OVO JE U BOOKLISTU', props.books);
  return (
    <div>
      <Container fluid>
        <Row sm="2" md="3" lg="4">
          {props.books.map(book => {
            return (
              <Col sm style={{ marginBottom: '2%' }}>
                <Card
                  key={book.id}
                  style={{ height: '100%' }}
                  onMouseEnter={event => {
                    event.currentTarget.style.transform = 'scale(1.05)';
                    event.currentTarget.style.boxShadow =
                      '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={event => {
                    event.currentTarget.style.transform = 'scale(1)';
                    event.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => {
                    toggle();
                    setSelectedBook(book);
                  }}
                >
                  <CardImg src={book.img_url} height="80%" />
                  <CardBody>
                    <CardTitle
                      tag="h5"
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      title={book.title}
                    >
                      {book.title}
                    </CardTitle>
                    <CardSubtitle
                      tag="h6"
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {book.author}
                    </CardSubtitle>
                    <CardText>Price: {book.price}</CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Modal
          isOpen={modal}
          toggle={toggle}
          modalTransition={{ timeout: 100 }}
        >
          <ModalHeader toggle={toggle}>{selectedBook?.title}</ModalHeader>
          <ModalBody>
            Written by: {selectedBook?.author}
            <br />
            Genre: {selectedBook?.genre.join(', ')}
            <br />
            {selectedBook?.category.length !== 0 && 'Category: '}
            {selectedBook?.category.length !== 0 &&
              selectedBook?.category.join(', ')}
            {selectedBook?.category.length !== 0 && <br />}
            Year of release: {selectedBook?.year}
            <br />
            Number of pages: {selectedBook?.number_of_pages}
            <br />
            Number of copies sold: {selectedBook?.sold}
            <br />
            {selectedBook?.awards.length !== 0 && (
              <>
                {'Awards Won: '}
                <ul>
                  {selectedBook?.awards.map(award => (
                    <li>{award}</li>
                  ))}
                </ul>
              </>
            )}
            Price: {'$' + selectedBook?.price}
          </ModalBody>
        </Modal>
      </Container>
    </div>
  );
}

export default BookList;
