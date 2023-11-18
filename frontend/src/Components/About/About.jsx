import React from "react";
import "./About.css";
import instaLogo from "../Assets/landing page/logo-instagram.png";
import leo from "../Assets/landing page/Leo img.png";
const About = () => {
  return (
    <div className="about" id="about">
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
              <div className="instaLink">
                <img src={instaLogo} alt="instagram" />
                <a
                  href="https://instagram.com/ziana.in?igshid=MTE5cHRhY2tieWl3aA=="
                  target="_blank"
                >
                  <span>ziana.in</span>
                </a>
              </div>
            </div>
          </div>
          <div className="abCtcRight">
            <p>REACH US </p>
            <div className="emailLink">
              <a href="zianawithlove@gmail.com">zianawithlove@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="abtSec2">
        <div className="abtSec2left">
          <div className="abtSec2Desc">
            <div className="abtDia">
              <p>
                “ Thank you for choosing Ziana for your jewellery needs. At
                Ziana, we are committed to providing you with the finest,
                handcrafted pieces of jewellery that elevate your style and
                grace.”
              </p>
            </div>
            <div className="abtAuth" style={{ color: "#b98dda" }}>
              -LEO DANIEL WINSTON
            </div>
            <div className="abtDesg" style={{ color: "#b98dda" }}>
              <strong>CEO, ZIANA</strong>
            </div>
          </div>
        </div>
        <div className="abtSec2right"></div>
        <div className="abtSec2img">
          <img src={leo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
