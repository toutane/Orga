import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase";

const initialAppContextValues = {
  authenticated: false,
  viewableItems: [],
  setAuthenticated: (state: boolean) => {},
  setViewableItems: (items: any) => {},
};

const AppContext = createContext(initialAppContextValues);
const { Provider } = AppContext;

const AppProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user !== null ? setAuthenticated(true) : setAuthenticated(false);
    });
  }, []);

  const [viewableItems, setViewableItems] = useState([]);
  return (
    <Provider
      value={{
        authenticated,
        setAuthenticated,
        viewableItems,
        setViewableItems,
      }}
    >
      {children}
    </Provider>
  );
};

export { AppContext, AppProvider, initialAppContextValues };
