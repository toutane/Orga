import React from "react";
import { StyleSheet, View } from "react-native";

import { JournalsFlatList } from "./list/JournalsFlatList";

export const Journals = () => {
  return (
    <View style={styles.container}>
      <JournalsFlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", marginBottom: 97 },
});
