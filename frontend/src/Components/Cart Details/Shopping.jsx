import React from "react";
import cagedqueen from "../Assets/caged queen img 2.png";
import { NavLink } from "react-router-dom";
import "./CartDetails.css";
const Shopping = () => {
  return (
    <div>
      <div className="cartHeader">
        <div className="cartHeadItem">1.Shopping Cart</div>
        <div className="cartHeadItem">2.Shipping Details</div>
        <div className="cartHeadItem">3.Payment Options</div>
      </div>
      <div className="cartBody">
        <div className="cartBodyLeft">
          <h2>Shopping Cart</h2>
          <hr className="custom-line" />
          <div className="cartItem">
            <div className="prodItem">
              <img src={cagedqueen}></img>
              <div className="prodDesc">
                <h3>The caged queen</h3>
                <h3>Rs 300</h3>
              </div>
            </div>

            <div className="prodQuant">
              <input type="number" placeholder="0" min="0" max="99"></input>
              <div className="numberIpBtn">
                <button onClick="">-</button>
                <button onClick="">+</button>
              </div>
            </div>
          </div>
          <div className="cartItem">
            <div className="prodItem">
              <img src={cagedqueen}></img>
              <div className="prodDesc">
                <h3>The caged queen</h3>
                <h3>Rs 300</h3>
              </div>
            </div>
            <div className="prodQuant">
              <input type="number" placeholder="0" min="0" max="99"></input>
              <div className="numberIpBtn">
                <button onClick="">-</button>
                <button onClick="">+</button>
              </div>
            </div>
          </div>
          <hr className="custom-line" />
          <div className="cartCTA">
            <NavLink to="/shippingdetails">
              <button className="priBtnLar">Next</button>
            </NavLink>
            <NavLink to="/">
              <button className="secBtnLar">Cancel</button>
            </NavLink>
          </div>
        </div>
        <div className="cartBodyRight">
          <h2>Summary</h2>
          <hr className="custom-line" />
          <div className="cartSumItem">
            <div>SUBTOTAL</div>
            <div>300</div>
          </div>
          <div className="cartSumItem">
            <div>SHIPPING</div>
            <div>300</div>
          </div>
          <div className="cartSumItem">
            <div>TAXES</div>
            <div>300</div>
          </div>
          <hr className="custom-line" />
          <div className="cartSumItem">
            <div>TOTAL</div>
            <div>300</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
