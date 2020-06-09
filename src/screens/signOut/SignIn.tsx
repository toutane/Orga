import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

export default function SignInScreen({ navigation }: any) {
  const { setAuthenticated } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Hello world from SignInScreen</Text>
      <Button
        title="Go to SignUp screen"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button title="Sign In !" onPress={() => setAuthenticated(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
