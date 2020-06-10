import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function JournalsHeader() {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.textColor }]}>
        My Journals
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 30 },
  title: { fontFamily: "roboto-medium", fontSize: 24 },
});
