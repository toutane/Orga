import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import HomeHeader from "../../components/home/header/HomeHeader";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function HomeScreen(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.backgroundColor }]}
    >
      <HomeHeader {...props} />
      <View style={styles.view}>
        <Button
          title="Go to Account screen"
          onPress={() => props.navigation.navigate("Account")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
});
