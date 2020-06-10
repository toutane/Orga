import React from "react";
import { StyleSheet, View } from "react-native";

import JournalsHeader from "./JournalsHeader";
import { JournalsFlatList } from "./JournalsFlatList";

const MyJournals = () => {
  return (
    <View style={styles.container}>
      <JournalsHeader />
      <JournalsFlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 10, paddingVertical: 10 },
});

export { MyJournals };
