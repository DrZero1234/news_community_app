import { styled } from "styled-components";
import { NavLink, Link } from "react-router-dom";

import { ReactComponent as FacebookIcon } from "../assets/Site icons/FacebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../assets/Site icons/TwitterIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/Site icons/InstagramIcon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/Site icons/LinkedinIcon.svg";

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledNavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  gap: 2em;

  a {
    text-decoration: none;
    color: var(--footer-link-color);
  }
  a:hover {
    color: var(--footer-link-hover);
  }
`;

const StyledFooterIcons = styled(StyledNavLinks)`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledFooter = styled.footer`
  display: grid;
  grid-area: footer;
  background-color: var(--footer-background);
  padding: 1em 0;

  img,
  svg {
    max-width: 36px;
    max-height: 36px;
  }
`;

const StyledInfoText = styled.div`
  text-align: center;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContentWrapper>
        <StyledNavLinks>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/about">Privacy policy</NavLink>
          </li>
          <li>
            <NavLink to="/about">Contact</NavLink>
          </li>
        </StyledNavLinks>
        {/* Icons */}
        {/* TODO Images as links */}
        <StyledFooterIcons>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </StyledFooterIcons>
        <StyledInfoText>
          <p>Copyright UpVote 2023. All Rights Reserved</p>
          <p>Designed by Themewarrior</p>
        </StyledInfoText>
      </FooterContentWrapper>
    </StyledFooter>
  );
};
