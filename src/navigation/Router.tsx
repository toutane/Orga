import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AppContext } from "../contexts/AppContext";

import HomeScreen from "../screens/signIn/Home";
import AccountScreen from "../screens/signIn/Account";
import SignInScreen from "../screens/signOut/SignIn";
import SignUpScreen from "../screens/signOut/SignUp";

const Stack = createStackNavigator();

export default function Router() {
  const { authenticated } = useContext(AppContext);
  return (
    <NavigationContainer>
      {authenticated ? (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: "Sign In",
              animationTypeForReplace: authenticated ? "pop" : "push",
            }}
          />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
