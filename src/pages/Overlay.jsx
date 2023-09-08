import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Container } from "../components/styled/Container";
import { StyledMainSite } from "../components/styled/MainSite";
import { Footer } from "../components/Footer";
import { SidebarWrapper } from "../components/styled/SidebarWrapper";
import { CategoryList } from "../components/Sidebar/CategoryList";

export const Overlay = () => {
  return (
    <Container>
      <Header />
      <StyledMainSite>
        <Outlet />
      </StyledMainSite>
      <SidebarWrapper>
        <CategoryList />
      </SidebarWrapper>
      <Footer />
    </Container>
  );
};
