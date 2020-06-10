import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import { firebaseConfig } from "../config/firebaseConfig";

const initialAppContextValues = {
  authenticated: false,
  setAuthenticated: (state: boolean) => {},
};

const AppContext = createContext(initialAppContextValues);
const { Provider } = AppContext;

const AppProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState<boolean | any>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user), setAuthenticated(user);
    });
  }, []);
  return (
    <Provider value={{ authenticated, setAuthenticated }}>{children}</Provider>
  );
};

export { AppContext, AppProvider, initialAppContextValues };
