import React, { useState } from "react";
import { useRef } from "react";
import logo from "../Assets/landing page/Logo.png";
import shopping from "../Assets/landing page/cart_icon.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const home = useRef(null);
  const product = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <a href="/" className="brandLogo">
        <img src={logo} alt="logo" />
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="navItem">
          <a href="/" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="navItem">
          <HashLink to="#about">About</HashLink>
        </li>
        <li className="navItem">
          <HashLink to="#products">Products</HashLink>
        </li>
      </ul>
      <div className="smlPriBtn">
        <button>Login</button>
        <img src={shopping} alt="cart icon" />
        <div className="smlPriBtnCount">0</div>
      </div>
    </nav>
  );
};

export default Navbar;
