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
  // apiKey: "AIzaSyA0WcERYf6cJ0xepac2ZZGcUCPDWp_GDxc",
  apiKey: `${import.meta.VITE_fiapiKey}`,
  authDomain: `${import.meta.VITE_fiauthDomain}`,
  projectId: `${import.meta.VITE_fiprojectId}`,
  storageBucket: `${import.meta.VITE_fistorageBucket}`,
  messagingSenderId: `${import.meta.VITE_fimessagingSenderId}`,
  appId: `${import.meta.VITE_fiappId}`,
  measurementId: `${import.meta.VITE_fimeasurementId}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
