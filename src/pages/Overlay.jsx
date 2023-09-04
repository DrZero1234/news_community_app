import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Container } from "../components/styled/Container";
import { StyledMainSite } from "../components/styled/MainSite";
import { Footer } from "../components/Footer";

export const Overlay = () => {
  return (
    <Container>
      <Header />
      <StyledMainSite>
        <Outlet />
      </StyledMainSite>
      <Footer />
    </Container>
  );
};
