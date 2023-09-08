import handleSubmit from "./handleSubmit";
import { useRef } from "react";
import { Container } from "./components/styled/Container";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

// Site: https://preview.themeforest.net/item/upvote-social-bookmarking-wordpress-theme/full_screen_preview/15542355

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
