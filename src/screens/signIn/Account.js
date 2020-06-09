import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello world from AccountScreen</Text>
      <Button
        title="Go to Account screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
