import { SignupContainer } from "../components/styled/Forms/SignupContainer";
import React, { useState } from "react";
import { auth } from "../firebase_setup/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  SignupFormField,
  SignupStyledForm,
} from "../components/styled/Forms/SignupStyledForm";
import { SignupFormWrapper } from "../components/styled/Forms/SignupFormWrapper";

export const Register = () => {
  const defaultProfilePicture =
    "https://srcwap.com/wp-content/uploads/2022/08/abstract-user-flat-4.png";

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [username, setUsername] = useState("");
  const [ProfilePictureUrl, setProfilePictureUrl] = useState("");

  const [notice, setNotice] = useState("");

  // TODO error checking
  const registerWithUserAndPassword = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const registeredUser = await auth.currentUser;
        updateProfile(registeredUser, {
          displayName: username ? username : "",
          photoURL: ProfilePictureUrl
            ? ProfilePictureUrl
            : defaultProfilePicture,
        });
        navigate("/");
      } catch {
        setNotice("Sorry something went wrong. Try again.");
      }
    } else {
      setNotice("Passwords dont match. Please try again");
    }
  };

  return (
    <SignupContainer>
      <SignupFormWrapper>
        <h2 id="signup-form-title">Register</h2>
        {notice != "" && <h3 className="error-message">{notice}</h3>}
        <SignupStyledForm>
          <SignupFormField>
            <label htmlFor="register-email-field">Email</label>
            <input
              required
              type="email"
              placeholder="newuser@email.com"
              value={email}
              id="register-email-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </SignupFormField>
          <SignupFormField>
            <label htmlFor="register-password-field">Password</label>
            <input
              required
              type="password"
              placeholder="password"
              value={password}
              id="register-password-field"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </SignupFormField>
          <SignupFormField>
            <label htmlFor="register-confirm-password-field">
              Password again
            </label>
            <input
              required
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              id="register-confirm-password-field"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </SignupFormField>
          <SignupFormField>
            <label htmlFor="username-field">Username</label>
            <input
              required
              type="text"
              placeholder="NewUser1234"
              value={username}
              id="username-field"
              onChange={(e) => setUsername(e.target.value)}
            />
          </SignupFormField>
          <SignupFormField>
            <label htmlFor="profile-picture-field">
              Profile photo URL
            </label>
            <input
              type="text"
              placeholder="https://www.google.com/profile_image.jpg"
              value={ProfilePictureUrl}
              id="profile-picture-field"
              onChange={(e) => setProfilePictureUrl(e.target.value)}
            />
          </SignupFormField>

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
      </SignupFormWrapper>
    </SignupContainer>
  );
};
