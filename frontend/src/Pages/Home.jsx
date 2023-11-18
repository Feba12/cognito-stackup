import React from "react";
import Hero from "../Components/Hero/Hero";
import FeatProd from "../Components/Featured Products/FeatProd";
import About from "../Components/About/About";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatProd />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
