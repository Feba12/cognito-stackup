import React from "react";
import "./Hero.css";
import HeroImage from "../Assets/landing page/backgrnd madamma img.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroDesc">
        <div className="desEle"><hr /></div>
        <div className="heroTitleCon">
          <h1>Elevate Your Elegance with Exquisite Jewellery</h1>
          <h2>Adorn Your Dreams, One Jewel at a Time</h2>
        </div>
        <div className="heroCta">
            <button>VIEW ALL</button>
        </div>
      </div>

      <div className="heroImage">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
