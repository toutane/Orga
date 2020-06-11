import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { UserContext } from "../../../contexts/UserContext";
import { ThemeContext } from "../../../contexts/ThemeContext";

import { SettingsButton } from "./SettingsButton";
import { screenWidth } from "../../../utils/dimensions";

export const HomeHeader = (props) => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.header}>
      <Text
        style={[styles.title, { color: theme.textColor }]}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {`Hey ${user.name}`}
      </Text>
      <SettingsButton {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 97,
    width: screenWidth,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelsView: { width: screenWidth - 135 },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 33,
  },
});
