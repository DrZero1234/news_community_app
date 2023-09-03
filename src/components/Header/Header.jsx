import { styled } from "styled-components";
import { Navbar } from "./Navbar";
import { ReactComponent as Logo } from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

import { devices } from "../../helpers/devices";

// https://www.codevertiser.com/reactjs-responsive-navbar/

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-area: header;
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
              <Logo />
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
      <h2>Trending now</h2>
      <h4>Sorry no trending at the moment</h4>
    </StyledHeader>
  );
};
