import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { devices } from "../../helpers/devices";

const StyledNavbar = styled.nav`
  position: relative;

  ul {
    display: flex;
    list-style-type: none;
    gap: 1em;
    flex-wrap: nowrap;
  }

  ul a {
    text-decoration: none;
    color: var(--header-list-color);
  }

  ul a:hover,
  .active {
    color: var(--header-list-hover);
  }

  @media (${devices.mobile}) {
    position: absolute;
    right: 0;
    width: 0;
    height: calc(100vh - 60px);
    transition: all 0.3s ease-in;
    overflow: hidden;

    ul {
      flex-direction: column;
    }

    ul li {
      margin-right: unset;
      margin-top: 22px;
    }
  }
`;

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <StyledNavbar>
      <ul>
        <li>
          <NavLink to="/">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/trending">Trending</NavLink>
        </li>
        <li>
          <NavLink to="/recent_posts">Recent</NavLink>
        </li>
        <li>
          <NavLink to="/active_users">Active Users</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};
