import React from "react";
import "./FeatProd.css";
import ProductCarousel from "../Product Carousel/ProductCarousel";

const FeatProd = () => {
  return (
    <div className="featProdSec">
      <div className="fpMainCon">
        <div className="mainHead">
          <h1>Featured Products</h1>
        </div>
        <ProductCarousel />
      </div>
      <div className="fpMoreCon"></div>
    </div>
  );
};

export default FeatProd;
