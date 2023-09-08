import { styled } from "styled-components";
import { Link } from "react-router-dom";

const CATEGORY_MOCK = [
  "politics",
  "music",
  "sicence",
  "sport",
  "culture",
  "entertainment",
];

const StyledCategoryList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const StyledListItem = styled.li`
  border-bottom: 2px solid black;
  padding: 0.5em;

  a {
    text-decoration: none;
    color: #000;
    text-transform: capitalize;
    transition: all ease-in 0.3s;
  }

  a:hover {
    color: var(--link-hover-orange);
  }

  a::before {
    content: counter(list-item) ".";
    margin-right: 0.5em;
    display: inline-block;
    background: #eee;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    border-radius: 100vw;
    color: #aaa;
    transition: all ease-in 0.3s;
  }
  a:hover::before {
    background: var(--sidebar-circle-hover-background);
    color: #fff;
  }
`;

export const CategoryList = () => {
  return (
    <StyledCategoryList>
      {CATEGORY_MOCK.map((category) => (
        <StyledListItem>
          <Link to="#">{category}</Link>
        </StyledListItem>
      ))}
    </StyledCategoryList>
  );
};
