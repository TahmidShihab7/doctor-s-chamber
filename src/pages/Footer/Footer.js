import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary footer">
        <Row className=" text-center align-items-center">
          <Col sm={12} md={6} lg={6}>
            <div className="text-light">
              <h1>Site Theme</h1>
              <span className="site-theme-light">Light</span>
              <span className="site-theme-dark">Dark</span>
              <h4>&nbsp;</h4>
              <h4>Terms &amp; Privacy</h4>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="text-white">
              <h3>⠀</h3>
              <h1>Find Us In</h1>

              <h4>Facebook</h4>
              <h4>App</h4>
              <h4>Instagram</h4>
              <h4>Contact Us</h4>

              <h4>Twitter</h4>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
