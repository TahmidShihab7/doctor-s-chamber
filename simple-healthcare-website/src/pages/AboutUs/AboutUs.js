import React from "react";
import { Container } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="container-fluid">
      <div>
        <h1>Health Care</h1>
        <p>
          Health Care is a <b>tertiary care hospital</b> and the leading
          contributor of <b>private health care services</b> in Bangladesh. This
          has been achieved only through consistent commitment to improve the
          lives of people through utmost service excellence since its inception
          on 6th December, 1991. Square Hospital is one of the ventures of
          Square Group which is the top business group of the country. <br />
          <br />
          We have been creating families across the East of England for more than 40 years. Since 2010, we have helped to create over 8,000 babies. To start your journey, book a virtual consultation now or call our patient services team on 01954 717210.
        </p>
        <h1 className="text-center py-5">Affiliate partners</h1>

        <div className="affiliate-img">
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
