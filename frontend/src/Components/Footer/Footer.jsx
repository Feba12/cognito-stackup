import React from "react";
import "./Footer.css";
import logo from "../Assets/landing page/Logo.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="brandLogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footCont">
        <div className="footContHead">
          <ul>
            <li>
              Main Menu
              <ul>
                <li className="navItem">
                  <a href="/">Home</a>
                </li>
                <li className="navItem">
                  <HashLink to="#about">About</HashLink>
                </li>
                <li className="navItem">
                  <HashLink to="#products">Products</HashLink>
                </li>
              </ul>
            </li>
            <li>
              Find us on
              <a href="https://instagram.com/ziana.in?igshid=MTE5cHRhY2tieWl3aA==">
                Instagram
              </a>
            </li>
            <li>Location</li>
          </ul>

          <div className="footContLink"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
