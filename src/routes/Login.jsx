import styled from "styled-components";

import { SignupContainer } from "../components/styled/Forms/SignupContainer";

import { auth } from "../firebase_setup/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";
import {
  SignupFormField,
  SignupStyledForm,
} from "../components/styled/Forms/SignupStyledForm";
import { SignupFormWrapper } from "../components/styled/Forms/SignupFormWrapper";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch {
      setNotice("You entered the wrong username or password");
    }
  };

  return (
    <SignupContainer>
      <SignupFormWrapper>
        <h2 id="signup-form-title">Login</h2>
        {notice != "" && <h3 className="error-message">{notice}</h3>}
        <SignupStyledForm>
          <SignupFormField>
            <label htmlFor="login-email-field">Email</label>
            <input
              type="email"
              placeholder="username@email.com"
              value={email}
              id="login-email-field"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </SignupFormField>
          <SignupFormField>
            <label htmlFor="login-password-field">Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              id="login-password-field"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </SignupFormField>
          <button
            type="submit"
            onClick={(e) => loginWithUsernameAndPassword(e)}
          >
            Submit
          </button>
          <span>
            Dont have an account?{" "}
            <Link to="/register">Create one</Link>
          </span>
        </SignupStyledForm>
      </SignupFormWrapper>
    </SignupContainer>
  );
};
