import styled from "styled-components";

export const SignupFormWrapper = styled.div`
  h2 {
    font-size: 2.5em;
    color: black;
    font-weight: var(--fw-xbold);
    margin-bottom: 0.75em;
    text-align: center;
  }

  .error-message {
    color: red;
    font-weight: var(--fw-bold);
  }
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  border: 2px solid black;
`;
