import styled from "styled-components";

const StyledSectionTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-style: normal;
  color: var(--sidebar-title-color);
  font-size: 14px;
  margin-bottom: 30px;
  border-bottom: solid 1px solid #dedede;
  padding-bottom: 0px;
`;

export const SectionTitle = ({ text }) => {
  return <StyledSectionTitle>{text}</StyledSectionTitle>;
};
