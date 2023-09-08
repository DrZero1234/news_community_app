import { styled } from "styled-components";
import { Navbar } from "./Navbar";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

import { devices } from "../../helpers/devices";

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
    display: flex;
    align-items: center;
    gap: 1em;
    white-space: nowrap;
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

  @media (${devices.mobile}) {
    .menu-icon {
      display: block;
      cursor: pointer;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <div className="header-left">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="Page logo" />
            </NavLink>
          </div>
          <div className="menu-icon">
            <span>hamburger</span>
          </div>
          <Navbar />
        </div>
        <div className="header-right">
          <h2>Login</h2>
          <span>Search icon</span>
        </div>
      </HeaderWrapper>
      <div className="sub-header">
        <h2>Trending now</h2>
        <h4>Sorry no trending at the moment</h4>
      </div>
    </StyledHeader>
  );
};
