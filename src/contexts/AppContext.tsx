import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase";

const initialAppContextValues = {
  authenticated: false,
  setAuthenticated: (state: boolean) => {},
};

const AppContext = createContext(initialAppContextValues);
const { Provider } = AppContext;

const AppProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      //console.log(user);
      user !== null ? setAuthenticated(true) : setAuthenticated(false);
    });
  }, []);
  return (
    <Provider value={{ authenticated, setAuthenticated }}>{children}</Provider>
  );
};

export { AppContext, AppProvider, initialAppContextValues };
