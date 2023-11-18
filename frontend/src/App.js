import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/LoginSignUp";
import Signup from "./Components/LoginSignUp/SignUp";
import Shipping from "./Components/Cart Details/Shipping";
import Payment from "./Components/Cart Details/Payment";
import ProductView from "./Components/Product View/ProductView";
import AddProducts from "./Components/AddProducts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shippingdetails" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/productview" element={<ProductView />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
