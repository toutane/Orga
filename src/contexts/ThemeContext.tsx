import React, { createContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native-appearance";
import { AsyncStorage } from "react-native";

import { dark } from "../themes/dark";
import { light } from "../themes/light";

const initialThemeContextValues = {
  colorScheme: light,
  theme: light,
  themeState: "automatic",
  setThemeState: (theme: any) => {},
};

const ThemeContext = createContext(initialThemeContextValues);
const { Provider } = ThemeContext;

const ThemeProvider = ({ children }: any) => {
  const [colorScheme, setColorScheme] = useState(
    useColorScheme() === "dark" ? dark : light
  );
  const [theme, setTheme] = useState(
    useColorScheme() === "dark" ? dark : light
  );
  const [themeState, setThemeState] = useState<string>("automatic");

  const storeTheme = async (themeState) => {
    await AsyncStorage.setItem("themeState", themeState);
  };

  const retrieveTheme = async () => {
    const value = await AsyncStorage.getItem("themeState");
    if (value !== null) {
      setThemeState(value);
    }
  };

  useEffect(() => {
    retrieveTheme();
  }, []);

  useEffect(() => {
    themeState === "automatic"
      ? setTheme(colorScheme)
      : themeState === "light"
      ? setTheme(light)
      : setTheme(dark);
  }, [themeState]);

  useEffect(() => {
    storeTheme(themeState);
  }, [themeState]);

  return (
    <Provider
      value={{
        colorScheme,
        theme,
        themeState,
        setThemeState,
      }}
    >
      {children}
    </Provider>
  );
};

export { ThemeProvider, ThemeContext, initialThemeContextValues };
