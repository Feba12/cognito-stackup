import React from "react";
import cagedqueen from "../Assets/caged queen img 2.png";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Shipping = () => {
  return (
    <div>
      <Navbar />
      <div className="cartHeader">
        <div className="cartHeadItem">1.Shopping Cart</div>
        <div className="cartHeadItem">2.Shipping Details</div>
        <div className="cartHeadItem">3.Payment Options</div>
      </div>
      <div className="cartBody">
        <div className="cartBodyLeft">
          <h2>Shipping Address</h2>
          <hr className="custom-line" />
          <form action="" method="post" className="shippingForm">
            <div className="formSplit">
              <input type="text" className="formDiv" placeholder="First Name" />
              <input type="text" className="formDiv" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Address 1" />
            <input type="text" placeholder="Address 2 " />
            <div className="formSplit">
              <input type="text" className="formDiv" placeholder="Country" />
              <input type="text" className="formDiv" placeholder="City" />
            </div>
            <div className="formSplit">
              <input type="text" className="formDiv" placeholder="Zip Code" />
              <input
                type="text"
                className="formDiv"
                placeholder="Phone Number"
              />
            </div>
          </form>
          <hr className="custom-line" />
          <div className="cartCTA">
            <NavLink to="/payment">
              <button className="priBtnLar">Next</button>
            </NavLink>
            <NavLink to="/cart">
              <button className="secBtnLar">Cancel</button>
            </NavLink>
          </div>
        </div>
        <div className="cartBodyRight">
          <h2>Summary</h2>
          <hr className="custom-line" />
          <div className="cartItem">
            <div className="prodItem">
              <img src={cagedqueen}></img>
              <div className="prodDesc">
                <h3>The caged queen</h3>
                <h3>Rs 300</h3>
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
          </div>
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
      <Footer />
    </div>
  );
};

export default Shipping;
