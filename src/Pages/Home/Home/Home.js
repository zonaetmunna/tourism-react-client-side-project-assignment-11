import React from "react";
import Banner from "../Banner/Banner";
import CarusalService from "../CarusalService/CarusalService";
import Offer from "../Offer/Offer";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <CarusalService></CarusalService>
      <Offer></Offer>
    </div>
  );
};

export default Home;
