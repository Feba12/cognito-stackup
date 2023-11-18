import React, { useState, useRef } from "react";
import { storage, db } from "../Config/Config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore/lite";

export const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const types = ["image/png", "image/jpeg"];

  const productImgHandler = (e) => {
    // const storageRef = firebase.storage().ref();

    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Please set a valid image type png or jpeg");
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();

    if (productImg == null) {
      setError("Please select an image");
      return;
    }

    try {
      const imageRef = ref(storage, `images/${productImg.name}`);
      const uploadTask = uploadBytesResumable(imageRef, productImg);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload progress: ${progress}%`);
        },
        (err) => {
          setError(err.message);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);

          const productsCollection = collection(db, "Products");

          const docRef = await addDoc(productsCollection, {
            productName: productName,
            productPrice: Number(productPrice),
            productImg: url,
          });

          console.log("Document written with ID: ", docRef.id);

          // Reset form fields
          setProductName("");
          setProductPrice("");
          fileInputRef.current.value = "";
          setError("");
        }
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="addProdBg">
      <div className="addProdCon">
        <h1>ADD PRODUCTS</h1>
        <form autoComplete="off" className="formAddProd" onSubmit={addProduct}>
          <input
            type="text"
            required
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <input
            type="text"
            required
            placeholder="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />

          <input type="file" ref={fileInputRef} onChange={productImgHandler} />

          <button className="priBtnLar">ADD</button>
        </form>
        {error && <span> {error} </span>}
      </div>
    </div>
  );
};

export default AddProducts;
