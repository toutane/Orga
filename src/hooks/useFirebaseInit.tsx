import React, { useState, useEffect } from "react";
import firebase from "firebase";
import * as SplashScreen from "expo-splash-screen";

import { firebaseConfig } from "../config/firebaseConfig";

export default function useFirebaseInit() {
  const [isFirebaseInitialized, setInitialized] = useState<boolean | any>(
    false
  );

  // useEffect(() => console.log("isFirebaseInitialized", isFirebaseInitialized), [
  //   isFirebaseInitialized,
  // ]);

  useEffect(() => {
    checkIfInitialized();
  }, []);

  // Check if firebase is initialize, if not: initialize it
  const checkIfInitialized = async () => {
    SplashScreen.preventAutoHideAsync();
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      setInitialized(true);
      SplashScreen.hideAsync();
    } else {
      setInitialized(true);
      SplashScreen.hideAsync();
    }
  };

  return isFirebaseInitialized;
}
