import styled from "styled-components";
import sideBgImage from "../../assets/side-bg.jpg";

export const SidebarBackground = styled.div`
  grid-area: sidebar;
  min-height: 100%;
  background-image: url(${sideBgImage});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0em 5em;
`;
