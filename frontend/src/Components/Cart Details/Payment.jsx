import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import cagedqueen from "../Assets/caged queen img 2.png";
import { NavLink } from "react-router-dom";
const Payment = () => {
  return (
    <div>
      <Navbar/>
      <div class="cartHeader">
        <div class="cartHeadItem">1.Shopping Cart</div>
        <div class="cartHeadItem">2.Shipping Details</div>
        <div class="cartHeadItem">3.Payment Options</div>
      </div>
      <div class="cartBody">
        <div class="cartBodyLeft">
          <h2>Payment Method</h2>
          <hr class="custom-line" />
          <form action="" method="post" class="paymentForm">
            <div>
              <input
                type="radio"
                name="paymentMethod"
                id="cardPayment"
                value="cardPayment"
              />
              <label for="cardPayment">CARD PAYMEMT</label>
            </div>
            <div>
              <input
                type="radio"
                name="paymentMethod"
                id="upiPayment"
                value="UPI"
              />
              <label for="upiPayment">UPI</label>
            </div>
          </form>
          <hr class="custom-line" />
          <div class="cartCTA">
            <button class="priBtnLar">Pay Now</button>
            <NavLink to="/shippingdetails">
              <button class="secBtnLar">Cancel</button>
            </NavLink>
          </div>
        </div>
        <div class="cartBodyRight">
          <h2>Summary</h2>
          <hr class="custom-line" />
          <div class="cartItem">
            <div class="prodItem">
              <img src={cagedqueen}></img>
              <div class="prodDesc">
                <h3>The caged queen</h3>
                <h3>Rs 300</h3>
              </div>
            </div>
          </div>
          <div class="cartItem">
            <div class="prodItem">
              <img src={cagedqueen}></img>
              <div class="prodDesc">
                <h3>The caged queen</h3>
                <h3>Rs 300</h3>
              </div>
            </div>
          </div>
          <hr class="custom-line" />
          <div class="cartSumItem">
            <div>SUBTOTAL</div>
            <div>300</div>
          </div>
          <div class="cartSumItem">
            <div>SHIPPING</div>
            <div>300</div>
          </div>
          <div class="cartSumItem">
            <div>TAXES</div>
            <div>300</div>
          </div>
          <hr class="custom-line" />
          <div class="cartSumItem">
            <div>TOTAL</div>
            <div>300</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Payment;
