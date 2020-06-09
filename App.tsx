import React from "react";

import { AuthProvider, initialValues } from "./src/contexts/AuthContext";

import useFirebaseInit from "./src/hooks/useFirebaseInit";
import useCachedResources from "./src/hooks/useCachedResources";

import Router from "./src/navigation/Router";

export default function App() {
  const isFirebaseInitialized = useFirebaseInit();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete || !isFirebaseInitialized) {
    return null;
  } else {
    return (
      <AuthProvider value={initialValues}>
        <Router />
      </AuthProvider>
    );
  }
}
