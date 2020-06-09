import React from "react";

import Router from "./src/navigation/Router";
import { AuthProvider, initialValues } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider value={initialValues}>
      <Router />
    </AuthProvider>
  );
}
