import { styled } from "styled-components";
import { Navbar } from "./Navbar";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { auth } from "../../firebase_setup/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { devices } from "../../helpers/devices";
import { StyledHeaderLink } from "./styled/HeaderLink";

// https://www.codevertiser.com/reactjs-responsive-navbar/

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-area: header;
  margin-bottom: 0.5em;

  .sub-header {
    background: white;
    border-bottom: 2px solid black;
    padding: 1em;
  }

  .sub-header-content {
    display: flex;
    gap: 1em;
    align-items: center;
    white-space: nowrap;
    height: 100%;
    margin: 0 5em;
  }

  .sub-header h2 {
    color: var(--header-blue);
    text-transform: uppercase;
    font-weight: var(--fw-xbold);
  }

  .sub-header h4 {
    color: #000;
    font-weight: var(--fw-bold);
  }

  .sub-header h4:hover {
    color: var(--link-hover-orange);
    cursor: pointer;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: var(--header-blue);
  color: var(--header-list-color);
  padding: 1em;

  .header-left,
  .header-right {
    display: flex;
    align-items: center;
    gap: 2em;
  }

  .header-right img {
    max-width: 50px;
  }

  @media (${devices.mobile}) {
    .menu-icon {
      display: block;
      cursor: pointer;
    }
  }
`;

const ProfileAvatar = styled.img`
  height: 50px;
  width: 50px !important;
  vertical-align: center;
  border-radius: 50%;
`;

export const Header = () => {
  const { currentUser } = auth;

  const [isSignedIn, setIsSignedIn] = useState(currentUser != null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(user);
      } else {
        setIsSignedIn(null);
      }
      console.log(currentUser);
    });
  }, []);

  return (
    <StyledHeader>
      <HeaderWrapper>
        <div className="header-left">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="Page logo" />
            </NavLink>
          </div>
          <>
            <div className="menu-icon">
              <span>hamburger</span>
            </div>
            <Navbar />
          </>
        </div>
        <div className="header-right">
          {isSignedIn ? (
            <>
              <StyledHeaderLink>
                <button onClick={() => signOut(auth)}>
                  Sign out
                </button>
              </StyledHeaderLink>
              {currentUser.photoURL && (
                <ProfileAvatar src={currentUser.photoURL} />
              )}
              <span>
                Signed in as{" "}
                {currentUser.displayName || currentUser.email}
              </span>
            </>
          ) : (
            <StyledHeaderLink>
              <Link to="/login">Login</Link>
            </StyledHeaderLink>
          )}

          <span>Search icon</span>
        </div>
      </HeaderWrapper>
      <div className="sub-header">
        <div className="sub-header-content">
          <h2>Trending now</h2>
          <h4>Sorry no trending at the moment</h4>
        </div>
      </div>
    </StyledHeader>
  );
};
