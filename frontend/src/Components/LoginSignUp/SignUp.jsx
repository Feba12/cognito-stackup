import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./LoginSignUp.css";
import logo from "../Assets/landing page/Logo.png";
import { NavLink } from "react-router-dom";
import { auth, db } from "../../Config/Config";
import { addDoc, collection } from "firebase/firestore/lite";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const appRouter = useNavigate(); // Use useNavigate for navigation

  const signUp = async (e) => {
    e.preventDefault();
    // console.log("form submitted");
    // console.log(firstname, lastname, email, password, confirm_passowrd);
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await addDoc(collection(db, "SignedUpWithUser"), {
        firstName,
        lastName,
        email,
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");

      appRouter("/login"); // Use history.push for navigation
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="authbgrnd">
      <div className="signUpCard">
        <h1>Create an account</h1>
        <form autoComplete="off" onSubmit={signUp}>
          <input
            type="text"
            placeholder="First Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <input
            type="submit"
            name="Submit"
            value="Sign Up"
            className="priBtnMed"
          />
        </form>
        {error && <div className="error-msg">{error}</div>}
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <div className="registernav">
            Already have an account?{" "}
            <span>
              <strong>Sign in</strong>
            </span>
          </div>
        </NavLink>
        <img src={logo} style={{ marginTop: "8%", marginBottom: "10%" }} />
      </div>
    </div>
  );
};

export default SignUp;
