import React from "react";
import "./Footer.css";
import instaLogo from "../Assets/landing page/logo-instagram.png";
import logo from "../Assets/landing page/Logo.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="brandLogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footCont">
        <div className="footContSec">
          <div className="footContHead">MAIN MENU</div>
          <ul className="footContLink">
            <li className="navItem">
              <a href="/">Home</a>
            </li>
            <li className="navItem">
              <HashLink to="/.#about">About</HashLink>
            </li>
            <li className="navItem">
              <HashLink to="/.#featProdSec">Products</HashLink>
            </li>
          </ul>
        </div>
        <div className="footContSec">
          <div className="footContHead">FIND US ON</div>
          <div className="footContLink">
            <div className="instaLink">
              <img src={instaLogo} alt="instagram" />
              <a
                href="https://instagram.com/ziana.in?igshid=MTE5cHRhY2tieWl3aA=="
                target="_blank"
              >
                ziana.in
              </a>
            </div>
          </div>
        </div>
        <div className="footContSec">
          <div className="footContHead">LOCATION</div>
          <div className="footContLink">Trivandrum, Kerala</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
