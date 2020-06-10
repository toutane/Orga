import React from "react";

import useCachedResources from "./src/hooks/useCachedResources";
import useFirebaseInit from "./src/hooks/useFirebaseInit";

import {
  AppProvider,
  initialAppContextValues,
} from "./src/contexts/AppContext";
import {
  AuthProvider,
  initialAuthContextValues,
} from "./src/contexts/AuthContext";
import {
  UserProvider,
  initialUserContextValues,
} from "./src/contexts/UserContext";
import {
  ThemeProvider,
  initialThemeContextValues,
} from "./src/contexts/ThemeContext";

import Router from "./src/navigation/Router";

export default function App() {
  const isFirebaseInitialized = useFirebaseInit();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete || !isFirebaseInitialized) {
    return null;
  } else {
    return (
      <AppProvider value={initialAppContextValues}>
        <AuthProvider value={initialAuthContextValues}>
          <UserProvider value={initialUserContextValues}>
            <ThemeProvider value={initialThemeContextValues}>
              <Router />
            </ThemeProvider>
          </UserProvider>
        </AuthProvider>
      </AppProvider>
    );
  }
}
