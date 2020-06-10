import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SignUpScreen({ navigation }: any) {
  const { signUp } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={{ color: theme.textColor }}>
        Hello world from SignUpScreen
      </Text>
      <Button
        title="Go to SignIn screen"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title="Sign Up!"
        onPress={() =>
          signUp({
            username: "Alexandra",
            email: "alex@email.com",
            password: "azerty",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
