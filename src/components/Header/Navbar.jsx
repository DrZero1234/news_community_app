import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { devices } from "../../helpers/devices";
import { StyledHeaderLink } from "./styled/HeaderLink";

const MOCK_HEADER_ITEMS = [
  { url: "/", text: "popular" },
  { url: "/trending", text: "trending" },
  { url: "/recent_posts", text: "recent" },
  { url: "/active_users", text: "active users" },
  { url: "/blog", text: "blog" },
];

const StyledNavbar = styled.nav`
  position: relative;

  ul {
    display: flex;
    list-style-type: none;
    gap: 1em;
    flex-wrap: nowrap;
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
        {MOCK_HEADER_ITEMS.map((category, i) => (
          <li key={i}>
            <StyledHeaderLink>
              <NavLink to={category.url}>{category.text}</NavLink>
            </StyledHeaderLink>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};
