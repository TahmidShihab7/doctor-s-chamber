import React from "react";
import "./SingleNews.css";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleNews = (props) => {
  const { image, title, index } = props.singleNews;

  return (
    <>
      <Col sm={1} md={6} lg={3}>
        <Card
          style={{ width: "18rem" }}
          className="single-news my-3 shadow p-3 mb-5 bg-body rounded"
        >
          <Card.Img
            variant="top"
            src={image}
            className="img-fluid news-img rounded "
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>

            <Link to={`/news/${index}`}>
              <Button variant="primary">Read More</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleNews;
