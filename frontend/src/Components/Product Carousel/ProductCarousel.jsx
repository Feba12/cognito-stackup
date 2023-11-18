import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ProductCarousel.css";
import { db } from "../../Config/Config";
import { collection, getCount, getDocs } from "firebase/firestore/lite";
import "boxicons";
import { Box, Paper, CircularProgress, Grid } from "@mui/material";
export const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      await getDocs(collection(db, "Products")).then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched products:", products);
        setProducts(products);
        setLoading(false);
      });
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === products.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? products.length - 1 : slide - 1);
  };

  return (
    <div className="productList">
      <button onClick={prevSlide} className="arrowBtn">
        <box-icon name="left-arrow" type="solid" color="#4a306d"></box-icon>
      </button>

      {loading ? (
        <CircularProgress /> // Show a loading spinner instead of "Loading..."
      ) : error ? (
        <p>{error}</p> // Show an error message if there's an error
      ) : (
        <div className="product">
          <Box my={2} width={500}>
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                columns={8}
              >
                {products.map((item, index) => (
                  <Grid item key={index} xs={4} md={2}>
                    <NavLink to="/productview">
                      <img
                        src={item.productImg}
                        alt={item.productName}
                        className={
                          slide === index ? "slide" : "slide slide-hidden"
                        }
                      />
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
              {/* <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {products.map((item, index) => (
                  <Grid item key={index+1} xs={6} md={3}>
                    <NavLink to="/productview">
                      <img
                        src={item.productImg}
                        alt={item.productName}
                        className={
                          slide === index+1 ? "slide" : "slide slide-hidden"
                        }
                      />
                    </NavLink>
                  </Grid>
                ))}
              </Grid> */}
          </Box>
        </div>
      )}

      <button onClick={nextSlide} className="arrowBtn">
        <box-icon name="right-arrow" type="solid" color="#4a306d"></box-icon>
      </button>
    </div>
  );
};

export default ProductCarousel;
{/* <Box my={2} width={400}>
  <Paper>
    <Grid container direction="row" justify="center" spacing={2}>
      <Grid item container alignItems="center" justify="center" xs={10}>
        {image.downloadURL ? (
          <img
            src={image.downloadURL}
            alt={`Upload Preview ${index + 1}`}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          />
        ) : (
          <Box p={2}>
            <CircularProgress />
          </Box>
        )}
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        item
        xs={2}
      >
        <Grid item container alignItems="center" justify="center">
          {!isFirstElement && (
            <IconButton
              aria-label="Image up"
              onClick={() => handleChangeOrderUp(index)}
            >
              <IoIosArrowUp />
            </IconButton>
          )}
        </Grid>
        <Grid item container alignItems="center" justify="center">
          {!isLastElement && (
            <IconButton
              aria-label="Image down"
              onClick={() => handleChangeOrderDown(index)}
            >
              <IoIosArrowDown />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Grid>
  </Paper>
</Box>; */}
