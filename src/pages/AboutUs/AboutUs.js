import React from "react";
import { Container } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="container-fluid">
      <div class="about-body">
        <h1>HealthCare BD</h1>
        <p>
          HealthCare BD is a <b>tertiary care hospital</b> and the leading
          contributor of <b>private healthcare services</b> in Bangladesh. This
          has been achieved only through consistent commitment to improve the
          lives of people through utmost service excellence since its inception
          on 16th December, 2006. Square Hospital is one of the ventures of
          Square Group which is the top business group of the country. <br />
          <br />
          The reputation of Square Hospital is the result of quality clinical
          outcome and comprehensive care, made achievable through world class
          integrated healthcare facilities by highly trained professionals.
          Thus, Square Hospitals strives to meet patients’ standards through
          quality healthcare and making a difference in their lives.
        </p>
        <h1>Affiliate partners</h1>
        <div class="affiliate-img">
          <img
            src="https://www.squarehospital.com/frontEnd/images/a1.jpg"
            alt="Affiliate 1"
          />
          <img
            src="https://www.squarehospital.com/frontEnd/images/a2.jpg"
            alt="Affiliate 2"
          />
          <img
            src="https://www.squarehospital.com/frontEnd/images/a3.jpg"
            alt="Affiliate 3"
          />
          <img
            src="https://www.squarehospital.com/frontEnd/images/a4.jpg"
            alt="Affiliate 4"
          />
        </div>
        <h1>MISSION</h1>
        <ul>
          <h2>Deliver QUALITY health care within 5 CORE standards</h2>
          <ul>
            <li>Adhering to high ethical and moral standards at all times</li>
            <li>Making service quality top priority in all we do</li>
            <li>Training staff to work within a quality care environment</li>
            <li>Providing quality health care service in all processes</li>
            <li>Delivering customer satisfaction through quality service</li>
          </ul>
        </ul>
      </div>
    </Container>
  );
};

export default AboutUs;
