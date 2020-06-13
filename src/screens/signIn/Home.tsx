import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";

import { ThemeContext } from "../../contexts/ThemeContext";

import { HomeHeader } from "../../components/home/header/HomeHeader";
import { Journals } from "../../components/home/journals/Journals";

export default function HomeScreen(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.backgroundColor }]}
    >
      <HomeHeader {...props} />
      <Journals />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
