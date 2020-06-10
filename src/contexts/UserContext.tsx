import React, { createContext, useState, useContext, useEffect } from "react";
import * as firebase from "firebase";

const dbh = firebase.firestore();

const initialUserContextValues = {
  user: { name: "" },
};

const UserContext = createContext(initialUserContextValues);
const { Provider } = UserContext;

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any | null>(initialUserContextValues.user);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) => (user !== null ? loadUser() : null));
  }, []);

  const loadUser = async () => {
    dbh
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .get()
      .then((doc) => setUser(doc.data()));
  };

  return <Provider value={{ user }}>{children}</Provider>;
};

export { UserContext, UserProvider, initialUserContextValues };
