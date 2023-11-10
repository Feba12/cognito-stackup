import React from "react";
import "./About.css";
import instaLogo from "../Assets/landing page/logo-instagram.png";
const About = () => {
  return (
    <div className="aboutSec">
      <div className="abtSec1">
        <div className="mainHead">
          <h1>About The Shop</h1>
        </div>
        <div className="abtDesc">
          <p>
            At Ziana, we believe that jewellery is more than just adornment.
            It's a reflection of one's individuality and style. Our exquisite
            jewellery pieces seamlessly blend timeless elegance with
            contemporary aesthetics, making them a versatile choice for any
            occasion. With designs that encapsulate the joy and significance of
            life's special moments, Ziana aims to be an integral part of every
            woman's journey. We take pride in helping our clients find jewellery
            that resonates with their essence and brings joy to their lives.
          </p>
        </div>
        <div className="abCtc">
          <div className="abCtcLeft">
            <p>FOLLOW US ON</p>
            <div className="abtLink">
              <img src={instaLogo} alt="instagram" />
              <a href="https://instagram.com/ziana.in?igshid=MTE5cHRhY2tieWl3aA==">
                <span>ziana.in</span>
              </a>
            </div>
          </div>
          <div className="abCtcRight"></div>
        </div>
      </div>
      <div className="abtSec2"></div>
    </div>
  );
};

export default About;
