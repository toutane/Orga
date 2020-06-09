import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

export default function AccountScreen({ navigation }: any) {
  const { setAuthenticated } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Hello world from AccountScreen</Text>
      <Button
        title="Go to Account screen"
        onPress={() => navigation.goBack()}
      />
      <Button title="Sign Out" onPress={() => setAuthenticated(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
