import React, { useState, useEffect } from "react";
import "./FeatProd.css";
import ProductCarousel from "../Product Carousel/ProductCarousel";
import { db } from "../../Config/Config";
import { collection, getCount, getDocs } from "firebase/firestore/lite";
import pinkmoon from "../Assets/pink moon img.png";

export const FeatProd = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      await getDocs(collection(db, "Products")).then((querySnapshot) => {
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched products:", productsData);
        setProducts(productsData);
      });
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="featProdSec" id="featProdSec">
      <div className="fpMainCon">
        <div className="mainHead">
          <h1>Featured Products</h1>
        </div>
        <ProductCarousel />
      </div>
      <div className="fpMoreCon">
        <div className="fpMoreSec1">
          {products.slice(0, 1).map((product, index) => (
            <div key={index}>
              <div className="fpMoreImage1">
                <img src={product.productImg} alt="" />
              </div>
              <div className="fpMoreTitle">
                <h3>{product.productName}</h3>
              </div>
              <div className="fpMorePrice">
                <h3>₹{product.productPrice}</h3>
              </div>
            </div>
          ))}

          {/* <div className="fpMoreStar">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={unstarred} alt="" />
            <img src={unstarred} alt="" />
          </div> */}
        </div>
        <div className="fpMoreSec2" id="allProducts">
          <div className="fpMoreSec2Row">
            {products.slice(1, 2).map((product, index) => (
              <div className="fpMoreItems" key={index}>
                <div className="fpMoreImage2">
                  <img src={product.productImg} alt="" />
                </div>
                <div className="fpMoreTitle">
                  <h3>{product.productName}</h3>
                </div>
                <div className="fpMorePrice">
                  <h3>₹{product.productPrice}</h3>
                </div>
              </div>
            ))}
            {products.slice(2, 3).map((product, index) => (
              <div className="fpMoreItems" key={index}>
                <div className="fpMoreImage2">
                  <img src={product.productImg} alt="" />
                </div>
                <div className="fpMoreTitle">
                  <h3>{product.productName}</h3>
                </div>
                <div className="fpMorePrice">
                  <h3>₹{product.productPrice}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="fpMoreSec2Row">
            {products.slice(3, 4).map((product, index) => (
              <div className="fpMoreItems" key={index}>
                <div className="fpMoreImage2">
                  <img src={product.productImg} alt="" />
                </div>
                <div className="fpMoreTitle">
                  <h3>{product.productName}</h3>
                </div>
                <div className="fpMorePrice">
                  <h3>₹{product.productPrice}</h3>
                </div>
              </div>
            ))}
            {products.slice(4, 5).map((product, index) => (
              <div className="fpMoreItems" key={index}>
                <div className="fpMoreImage2">
                  <img src={product.productImg} alt="" />
                </div>
                <div className="fpMoreTitle">
                  <h3>{product.productName}</h3>
                </div>
                <div className="fpMorePrice">
                  <h3>₹{product.productPrice}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatProd;
