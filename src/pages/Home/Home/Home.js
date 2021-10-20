import React from "react";
import Banner from "../Banner/Banner";
import Covid19 from "../Covid19/Covid19";
import News from "../News/News";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <div id="services">
        <Services></Services>
      </div>
      <div id="news">
        <News></News>
      </div>
      <div id="covid">
        <Covid19></Covid19>
      </div>
    </div>
  );
};

export default Home;
