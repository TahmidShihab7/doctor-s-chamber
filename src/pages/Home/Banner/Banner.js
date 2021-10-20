import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./img/banner01.jpg";
import img2 from "./img/banner02.jpg";
import img3 from "./img/banner03.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img "
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="text-dark">
              Keeping your body healthy is an expression of gratitude to the
              whole cosmos – the trees, the clouds, everything
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h5 className="text-dark">
              Time And health are two precious assets that we don’t recognize
              and appreciate until they have been depleted..
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h5 className="text-dark">
              He who has health, has hope; and he who has hope, has everything..
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
