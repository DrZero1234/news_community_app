import styled from "styled-components";

import { SignupContainer } from "../components/styled/SignupContainer";

import { auth } from "../firebase_setup/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";
import { SignupStyledForm } from "../components/styled/Forms/SignupStyledForm";

const LoginRegWrapper = styled.div``;

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch {
      setNotice("You entered the wrong username or password");
    }
  };

  return (
    <SignupContainer>
      <LoginRegWrapper>
        <SignupStyledForm>
          <label htmlFor="login-email-field">Email</label>
          <input
            type="email"
            placeholder="username@email.com"
            value={email}
            id="login-email-field"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="login-password-field">Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            id="login-password-field"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
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
      </LoginRegWrapper>
    </SignupContainer>
  );
};
