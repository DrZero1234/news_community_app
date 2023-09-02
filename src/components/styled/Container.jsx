import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "header header"
    "main side"
    "footer footer";
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr auto;

  font-family: "Poppins", sans-serif;
  line-height: 1.5em;
  font-weight: 400;
  color: #888888;
  font-size: 14px;
`;
