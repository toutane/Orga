import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { UserContext } from "../../../contexts/UserContext";
import { ThemeContext } from "../../../contexts/ThemeContext";

import HomeAvatar from "./HomeAvatar";
import { screenWidth } from "../../../utils/dimensions";

const moment = require("moment");

export default function HomeHeader(props) {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.header}>
      <View style={styles.labelsView}>
        <Text
          style={[styles.title, { color: theme.textColor }]}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {`Hey ${user.name}`}
        </Text>
        <Text style={[styles.subTitle, { color: theme.textColor }]}>
          {moment().format("dddd, MMMM, Do")}
        </Text>
      </View>
      <HomeAvatar {...props} />
    </View>
  );
}

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
    fontSize: 34,
  },
  subTitle: { fontFamily: "bentham-regular", fontSize: 22 },
});
