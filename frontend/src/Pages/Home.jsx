import React from "react";
import Hero from "../Components/Hero/Hero";
import FeatProd from "../Components/Featured Products/FeatProd";
import About from "../Components/About/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatProd />
      <About />
    </div>
  );
};

export default Home;