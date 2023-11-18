import React from "react";
import "./ProductView.css";
import cagedqueen from "../Assets/product_view/caged queen img 2 (1).png";
import profile from "../Assets/profile pic.png";
import daisycharm from "../Assets/product_view/daisy charm img.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductView = () => {
  return (
    <section class="productVeiw">
      <Navbar />
      <div class="productCont">
        <div class="productImg">
          <img src={daisycharm}></img>
        </div>
        <div class="productDetails">
          <h1>Daisy Charm</h1>
          <div class="reviewBox">
            star rating
            <div> 5 reviews</div>
          </div>
          <hr class="custom-line2" />
          <h4>₹300</h4>
          <hr class="custom-line2" />
          <div>
            Daisy Charm: Delicate beauty captured in a timeless design, this
            daisy pendant exudes elegance and simplicity. A symbol of purity and
            grace, it's a perfect addition to your jewellery collection.
          </div>
          <button class="priBtnLar" style={{marginTop:'10px'}}>Add To Cart</button>
        </div>
      </div>
      <div class="similarProdCont">
        <h1>Similar Products</h1>
        <div class="similarProd">
          <div class="prodItem">
            <img src={cagedqueen}></img>
            <div class="prodDesc">
              <h3>The caged queen</h3>
              <h3>Rs 300</h3>
            </div>
          </div>
          <div class="prodItem">
            <img src={cagedqueen}></img>
            <div class="prodDesc">
              <h3>The caged queen</h3>
              <h3>Rs 300</h3>
            </div>
          </div>
          <div class="prodItem">
            <img src={cagedqueen}></img>
            <div class="prodDesc">
              <h3>The caged queen</h3>
              <h3>Rs 300</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="reviewCont">
        <h1>Reviews</h1>
        <div class="reviewItem">
          <div class="reviewerCont">
            <div class="reviewerDp">
              <img src={profile}></img>
            </div>
            <div class="reviewDetails">
              <h3>JOHN DOE</h3>
              <div>August 14,2023</div>
              <div>Star rating</div>
            </div>
          </div>
          <div class="reviewDescCont">
            <div class="reviewDesc">
              I couldn't be happier with my daisy charm pendant from Ziana. The
              craftsmanship is exceptional, and it looks even more beautiful in
              person. I get compliments every time I wear it. A truly timeless
              piece!
            </div>
          </div>
        </div>
        <div class="reviewItem">
          <div class="reviewerCont">
            <div class="reviewerDp">
              <img src={profile}></img>
            </div>
            <div class="reviewDetails">
              <h3>JOHN DOE</h3>
              <div>August 14,2023</div>
              <div>Star rating</div>
            </div>
          </div>
          <div class="reviewDescCont">
            <div class="reviewDesc">
              The daisy charm pendant is a delicate and elegant addition to my
              jewelry collection. The attention to detail is remarkable, and it
              pairs well with any outfit. I love the symbolic meaning of the
              daisy as well.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductView;
