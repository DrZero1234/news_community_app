import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding: 1em;
  grid-area: header;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: var(--header-blue);
  color: var(--header-list-color);
`;

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <div className="header-left">
          <h1>Upvote news</h1>
          <nav>
            <ul>
              <li>Popular</li>
              <li>Trending</li>
              <li>Recent</li>
              <li>Active Users</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <h2>Login</h2>
          <span>Search icon</span>
        </div>
      </HeaderWrapper>
      <h2>Trending now</h2>
      <h4>Sorry no trending at the moment</h4>
    </StyledHeader>
  );
};
