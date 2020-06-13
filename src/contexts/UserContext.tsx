import React, { createContext, useState, useContext, useEffect } from "react";
import * as firebase from "firebase";

import { AppContext } from "./AppContext";

const dbh = firebase.firestore();

const initialUserContextValues = {
  user: { name: "" },
  userJournals: [],
};

const UserContext = createContext(initialUserContextValues);
const { Provider } = UserContext;

const UserProvider = ({ children }: any) => {
  const { authenticated } = useContext(AppContext);
  const [user, setUser] = useState<any | null>(initialUserContextValues.user);
  const [userJournals, setUserJournals] = useState<any | null>(
    initialUserContextValues.userJournals
  );

  useEffect(() => {
    authenticated ? (loadUser(), loadUserJournals()) : null;
  }, [authenticated]);

  const loadUser = async () => {
    dbh
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .get()
      .then((doc) => setUser(doc.data()));
  };

  const loadUserJournals = async () => {
    const journals = await dbh
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("journals")
      .get();

    return setUserJournals(
      journals.docs.map((doc) => ({
        ...doc.data(),
      }))
    );
  };

  return <Provider value={{ user, userJournals }}>{children}</Provider>;
};

export { UserContext, UserProvider, initialUserContextValues };
