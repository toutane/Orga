import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const ratio = 400 / 270;
export const CARD_WIDTH = width * 0.65;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});

interface CardProps {
  id: string;
  color: string;
}

export default ({ color, id }: CardProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color }]}
      activeOpacity={0.8}
      onPress={() => console.log("card pressed", id)}
    />
  );
};
