/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0WcERYf6cJ0xepac2ZZGcUCPDWp_GDxc",
  authDomain: "firbasemademedoit.firebaseapp.com",
  projectId: "firbasemademedoit",
  storageBucket: "firbasemademedoit.appspot.com",
  messagingSenderId: "244972862635",
  appId: "1:244972862635:web:63a3e9e10ea3e418384bee",
  measurementId: "G-9DB8294LDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
