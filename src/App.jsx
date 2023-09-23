import handleSubmit from "./handleSubmit";
import { useRef } from "react";
import { Container } from "./components/styled/Container";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { auth } from "./firebase_setup/firebase";

import * as functions from "firebase-functions";

// Site: https://preview.themeforest.net/item/upvote-social-bookmarking-wordpress-theme/full_screen_preview/15542355

function App() {
  console.log(auth.currentUser);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

const makeUppercase = functions.firestore
  .document("/messages/{documentId}")
  .onCreate((snap, context) => {
    const original = snap.data().original;
    console.log(
      `Uppercasing:${(context.params.documentId, original)}`
    );
    const uppercase = original.toUpperCase();
    return snap.ref.set({ uppercase }, { merge: true });
  });

export default App;
