import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import firebase from "../firebase/Firebase";

export default function useFirebaseInit() {
  const [isFirebaseInitialized, setInitialized] = useState<boolean | any>(
    false
  );

  // useEffect(() => console.log("isFirebaseInitialized", isFirebaseInitialized), [
  //   isFirebaseInitialized,
  // ]);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setInitialized(true);
    });
  }, []);

  return isFirebaseInitialized;
}
