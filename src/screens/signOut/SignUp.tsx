import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

export default function SignUpScreen({ navigation }: any) {
  const { signUp } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Hello world from SignUpScreen</Text>
      <Button
        title="Go to SignIn screen"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title="Sign Up!"
        onPress={() =>
          signUp({
            username: "Toutane",
            email: "ca@leger.email",
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
