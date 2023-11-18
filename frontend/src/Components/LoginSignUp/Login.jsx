import React from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";
import logo from "../Assets/landing page/Logo.png";
import googleicon from "../Assets/googleIcon.png";

const Login = () => {
  





  return (
    <div className="authbgrnd">
      <div className="logInCard">
        <h1>Welcome Back</h1>
        <div className="googleBtn">
          <img src={googleicon} width={20} height={20} />
          Continue with Google
        </div>
        <div className="orBreaker">
          <hr className="customLine2" />
          Or
          <hr className="customLine2" />
        </div>
        <form action="#" method="post">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input
            type="submit"
            name="Submit"
            value="Login"
            className="priBtnMed"
          />
        </form>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className="registernav">
            Don't have an account?{" "}
            <span>
              <strong>Register</strong>
            </span>
          </div>
        </Link>

        <img src={logo} style={{ marginTop: "15%" }} />
      </div>
    </div>
  );
};
export default Login;
