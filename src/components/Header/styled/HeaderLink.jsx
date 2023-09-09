import styled from "styled-components";

export const StyledHeaderLink = styled.div`
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: var(--header-list-color);
  }

  a:hover,
  .active {
    color: var(--header-list-hover);
  }
`;
