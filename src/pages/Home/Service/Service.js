import React from "react";
import "./service.css";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { service, image, index, title } = props.service;
  return (
    <>
      <Col sm={1} md={6} lg={3}>
        <Card
          style={{ width: "18rem" }}
          className="single-service shadow p-3 mb-5 bg-body rounded "
        >
          <Card.Img variant="top" src={image} className="img-fluid rounded" />
          <Card.Body>
            <Card.Title>{service}</Card.Title>
            <Card.Text>{title}</Card.Text>
            <Link to={`/service/${index}`}>
              <Button variant="primary">See Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Service;
