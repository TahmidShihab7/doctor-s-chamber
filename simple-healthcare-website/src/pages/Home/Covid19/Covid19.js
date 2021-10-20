import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import covid from "./img/covid.png";

const Covid19 = () => {
  return (
    <Container className="my-5 ">
      <h1 className="text-center border border-5 rounded-pill text-primary">
        Covid 19
      </h1>
      <Row className="border shadow p-3 mb-5 bg-body rounded">
        <Col sm={12} md={6} lg={6}>
          <img className="img-fluid" src={covid} alt="" />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center d-flex align-items-center"
        >
          <div className="">
            <h2>Covid 19 Update</h2>
            <h3>Total Affected: 1968579</h3>
            <h3>Total Survived: 1008579</h3>
            <h3>Total Death: 68579</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Covid19;
