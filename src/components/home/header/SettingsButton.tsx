import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeContext } from "../../../contexts/ThemeContext";

export const SettingsButton = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      //activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: theme.backgroundColor,
          shadowColor: theme.textColor,
        },
      ]}
      onPress={() => navigation.navigate("Account")}
    >
      <Feather name="menu" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.1,
    shadowRadius: 7.5,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
