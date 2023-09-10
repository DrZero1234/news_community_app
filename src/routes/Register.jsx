import { SignupContainer } from "../components/styled/SignupContainer";
import React, { useState } from "react";
import { auth } from "../firebase_setup/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { SignupStyledForm } from "../components/styled/Forms/SignupStyledForm";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notice, setNotice] = useState("");

  const registerWithUserAndPassword = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/login");
      } catch {
        setNotice("Sorry something went wrong. Try again.");
      }
    } else {
      setNotice("Passwords dont match. Please try again");
    }
  };

  return (
    <SignupContainer>
      <SignupStyledForm>
        {notice != "" && <div>{notice}</div>}
        <label htmlFor="register-email-field">Email</label>
        <input
          type="email"
          placeholder="newuser@email.com"
          value={email}
          id="register-email-field"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="register-password-field">Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          id="register-password-field"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label htmlFor="register-confirm-password-field">
          Confirm password
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          id="register-confirm-password-field"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <button
          type="submit"
          onClick={(e) => registerWithUserAndPassword(e)}
        >
          Register
        </button>
        <span>
          Already have an account?{" "}
          <Link to="/login">Login here.</Link>
        </span>
      </SignupStyledForm>
    </SignupContainer>
  );
};
