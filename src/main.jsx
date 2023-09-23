import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import * as functions from "firebase-functions";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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

export default makeUppercase;
