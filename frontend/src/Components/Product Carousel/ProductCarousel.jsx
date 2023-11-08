import React, { useState } from "react";
import caged_queen from "../Assets/caged queen img.png";
import daisy_charm from "../Assets/daisy charm img.png";
import arrowright from "../Assets/landing page/arrow-right.png";
import arrowleft from "../Assets/landing page/arrow-left.png";

function ProductCarousel() {
  const [products] = useState([
    {
      id: 1,
      name: "The Caged Queen",
      image: caged_queen,
    },
    {
      id: 2,
      name: "Daisy Charm",
      image: daisy_charm,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPreviousProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNextProduct = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <button onClick={showPreviousProduct}>
        <img src={arrowleft} alt="" />
      </button>
      <div className="product">
        {/* Display the current product */}
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
        />
        <h3>{products[currentIndex].name}</h3>
        <p>{products[currentIndex].description}</p>
        
      </div>
      <button onClick={showNextProduct}>
        <img src={arrowright} alt="" />
      </button>
    </div>
  );
}

export default ProductCarousel;
