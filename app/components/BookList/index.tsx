/**
 *
 * BookList
 *
 */
import BookModal from "components/BookModal";
import React from "react";

// import styled from 'styles/styled-components';

import { FormattedMessage } from "react-intl";
import "./customCss.css";
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
  Row,
} from "reactstrap";
import { Book } from "types";

interface Props {
  books: Array<Book>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookList(props: Props) {
  // Modal open state
  const [modal, setModal] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState<Book>();

  const mouseEnterEvent = (event) => {
    event.currentTarget.style.transform = "scale(1.05)";
    event.currentTarget.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
  };

  const mouseLeaveEvent = (event) => {
    event.currentTarget.style.transform = "scale(1)";
    event.currentTarget.style.boxShadow = "none";
  };

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Container fluid className="bookList">
        <Row sm="2" md="3" lg="4">
          {props.books.map((book) => {
            return (
              <Col sm className="bookListCol">
                <Card
                  key={book.id}
                  className="bookListCard"
                  onMouseEnter={mouseEnterEvent}
                  onMouseLeave={mouseLeaveEvent}
                  onClick={() => {
                    toggle();
                    setSelectedBook(book);
                  }}
                >
                  <CardImg src={book.img_url} height="80%" />
                  <CardBody>
                    <CardTitle
                      tag="h5"
                      className="bookListText"
                      title={book.title}
                    >
                      {book.title}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="bookListText">
                      {book.author}
                    </CardSubtitle>
                    <CardText>Price: ${book.price}</CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <BookModal selectedBook={selectedBook} toggle={toggle} modal={modal} />
      </Container>
    </div>
  );
}

export default BookList;
