import React, { useState } from "react";
import "./Navbar.css";

import logo from "../Assets/landing page/Logo.png";
import shopping from "../Assets/landing page/shopping-cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navBar">
      <div className="brandLogo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navMenu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("product");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/product">
            Products
          </Link>
          {menu === "product" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="smlPriBtn">
        <Link to="/cart">
          <img src={shopping} alt="cart icon" />
        </Link>
        <div className="smlPriBtnCount">0</div>
      </div>
    </div>
  );
};

export default Navbar;
