// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCUPBl5Oqq-aY7r66FezDd_q6q0BuaHiHo",

  authDomain: "quora-clone-e3af3.firebaseapp.com",

  projectId: "quora-clone-e3af3",

  storageBucket: "quora-clone-e3af3.appspot.com",

  messagingSenderId: "521604189429",

  appId: "1:521604189429:web:8f24902e28ecddfac349bc",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);
