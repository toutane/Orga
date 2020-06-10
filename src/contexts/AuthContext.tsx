import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import "firebase/firestore";

const dbh = firebase.firestore();

interface UserRegistration {
  username: string;
  email: string;
  password: string;
}

interface Credentials {
  email: string;
  password: string;
}

const initialAuthContextValues = {
  setUsername: (username: string) => {},
  setEmail: (email: string) => {},
  setPassword: (password: string) => {},
  signUp: async ({ username, email, password }: UserRegistration) => {},
  signIn: async ({ email, password }: Credentials) => {},
  signOut: () => {},
};

const AuthContext = createContext(initialAuthContextValues);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: any) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = async ({ username, email, password }: UserRegistration) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() =>
        dbh.collection("users").doc(firebase.auth().currentUser?.uid).set({
          uid: firebase.auth().currentUser?.uid,
          name: username,
          username: username,
          email: email,
        })
      );
  };

  const signIn = async ({ email, password }: Credentials) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const signOut = async () => {
    firebase.auth().signOut();
  };

  return (
    <Provider
      value={{ setUsername, setEmail, setPassword, signIn, signUp, signOut }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider, initialAuthContextValues };
