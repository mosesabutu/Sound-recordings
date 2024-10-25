/** @format */
import { useState } from "react";
import { auth, googleAuthProvider } from "../../Config/fireBaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // console.log(uid);
    } else {
      // User is signed out
      // ...
    }
  });
  async function signIn() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  }
  async function signUp() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  }
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.log(error.code);
    }
  }
  async function logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.code);
    }
  }
  return (
    <div>
      {auth?.currentUser?.photoURL && (
        <img src={auth?.currentUser?.photoURL} alt="" />
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEmail("");
          setPassword("");
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          value={email}
          name="email"
          id="email"
          placeholder="Email"
          type="email"
          autoComplete="on"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <button type="submit" onClick={signUp}>
          Sign Up
        </button>{" "}
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <button onClick={signInWithGoogle}>Sign In WIth Google</button>
        <button onClick={logOut}>LogOut</button>
      </form>
    </div>
  );
}
