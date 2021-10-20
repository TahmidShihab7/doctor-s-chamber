import React from "react";
import Banner from "../Banner/Banner";
import Covid19 from "../Covid19/Covid19";
import News from "../News/News";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <News></News>
      <Covid19></Covid19>
    </div>
  );
};

export default Home;
