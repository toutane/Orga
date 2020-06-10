import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function AccountScreen({ navigation }: any) {
  const { signOut } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={{ color: theme.textColor }}>
        Hello world from AccountScreen
      </Text>
      <Button
        title="Go to Account screen"
        onPress={() => navigation.goBack()}
      />
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
