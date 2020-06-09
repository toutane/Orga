import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function SignUpScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Hello world from SignUpScreen</Text>
      <Button
        title="Go to SignIn screen"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
