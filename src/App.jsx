import handleSubmit from "./handleSubmit";
import { useRef } from "react";
import { Container } from "./components/styled/Container";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

// Site: https://preview.themeforest.net/item/upvote-social-bookmarking-wordpress-theme/full_screen_preview/15542355

function App() {
  const dataRef = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/*  
        <form onSubmit={submithandler}>
          <input type="text" ref={dataRef} />
          <button type="submit">Save</button>
        </form>
        */}
    </>
  );
}

export default App;
