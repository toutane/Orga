import React, { createContext, useState } from "react";

const initialValues = {
  authenticated: false,
  setAuthenticated: (state: boolean) => {},
};

const AuthContext = createContext(initialValues);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Provider value={{ authenticated, setAuthenticated }}>{children}</Provider>
  );
};

export { AuthContext, AuthProvider, initialValues };
