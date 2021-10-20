import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const { services } = useServices([]);

  return (
    <div>
      <Container className="text-center container-fluid">
        <Row>
          <h1 className="text-center border border-5 rounded-pill text-primary my-4 py-2">
            Our Services
          </h1>
          {services.map((service) => (
            <Service service={service} key={service._key}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
