import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

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
  color: string;
}

export default ({ color }: CardProps) => {
  return <View style={[styles.card, { backgroundColor: color }]} />;
};
