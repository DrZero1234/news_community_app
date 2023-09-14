import styled from "styled-components";

export const SignupStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;

  button {
    max-width: fit-content;
    padding: 0.75em;
    color: white;
    background: var(--sidebar-circle-hover-background);
    border: none;
    transition: all 0.25s ease-in;
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const SignupFormField = styled.div`
  display: flex;
  flex-direction: column;

  label  {
    margin-bottom: 4px;
  }

  input {
    background: var(--form-input-bg);
    border: none;
    padding: 0.5em;
  }
`;
