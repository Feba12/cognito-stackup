import React from "react";
import "./Hero.css";
import HeroImage from "../Assets/landing page/backgrnd madamma img.png";
import { HashLink } from "react-router-hash-link";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="heroDesc">
        <div className="desEle">
          <hr />
        </div>
        <div className="heroTitleCon">
          <h1>Elevate Your Elegance with Exquisite Jewellery</h1>
          <h4>Adorn Your Dreams, One Jewel at a Time</h4>
        </div>
        <div className="heroCta">
          <HashLink to="/.#allProducts">
            <button>
              <h3>VIEW ALL</h3>
            </button>
          </HashLink>
        </div>
      </div>

      <div className="heroImage">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
