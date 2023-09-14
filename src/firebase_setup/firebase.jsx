// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase_config";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase

const app = initializeApp(getFirebaseConfig());

export const auth = getAuth(app);

export const firestore = getFirestore(app);
