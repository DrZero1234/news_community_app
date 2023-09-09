import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Container } from "../components/styled/Container";
import { StyledMainSite } from "../components/styled/MainSite";
import { SidebarBackground } from "../components/styled/SideBackground";
import { Footer } from "../components/Footer";

export const SignupOverlay = () => {
  return (
    <Container>
      <Header />
      <StyledMainSite>
        <Outlet />
      </StyledMainSite>
      <SidebarBackground />
      <Footer />
    </Container>
  );
};
