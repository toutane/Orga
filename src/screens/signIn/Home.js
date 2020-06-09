import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello world from HomeScreen</Text>
      <Button
        title="Go to Account screen"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
