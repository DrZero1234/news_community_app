import styled from "styled-components";

import { SignupContainer } from "../components/styled/SignupContainer";

import { auth } from "../firebase_setup/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

const LoginRegWrapper = styled.div``;

const LoginRegForm = styled.form`
  display: flex;
  flex-direction: column;
`;

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
        <LoginRegForm>
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
            type="passoword"
            placeholder="password"
            value={password}
            id="login-password-field"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </LoginRegForm>
      </LoginRegWrapper>
    </SignupContainer>
  );
};
