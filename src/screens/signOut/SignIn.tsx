import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SignInScreen({ navigation }: any) {
  const { signIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={{ color: theme.textColor }}>
        Hello world from SignInScreen
      </Text>
      <Button
        title="Go to SignUp screen"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        title="Sign In !"
        onPress={() => signIn({ email: "alex@email.com", password: "azerty" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
