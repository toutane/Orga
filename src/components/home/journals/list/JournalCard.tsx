import React, { useContext, useEffect } from "react";
import { Animated, View, Dimensions, StyleSheet } from "react-native";
import Card, { CARD_WIDTH as DEFAULT_CARD_WIDTH, CARD_HEIGHT } from "./Card";
import { UserContext } from "../../../../contexts/UserContext";

export const MARGIN = 20;
export const CARD_WIDTH = DEFAULT_CARD_WIDTH + MARGIN * 2;
const { width: wWidth } = Dimensions.get("window");
const width = wWidth + 100;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: MARGIN,
    marginBottom: 15,
  },
  back: {
    position: "absolute",
    height: CARD_HEIGHT,
    width: DEFAULT_CARD_WIDTH,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "black",
  },
  border: {
    zIndex: 1,
    position: "absolute",
    height: CARD_HEIGHT,
    width: 35,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  shadow: {
    position: "absolute",
    left: 12,
    top: 12,
    width: DEFAULT_CARD_WIDTH,
    height: CARD_HEIGHT,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

interface WalletCardProps {
  x: Animated.Value;
  index: number;
  item: { color: string; id: string; title: string; createAt: string };
}

const WalletCard = ({ item, x, index }: WalletCardProps) => {
  const { userJournals } = useContext(UserContext);
  const position = Animated.subtract(index * CARD_WIDTH, x);
  const isDisappearing = -CARD_WIDTH;
  const isTop = 0;
  const isBottom = width - CARD_WIDTH;
  const isAppearing = width;
  const translateX = Animated.add(
    Animated.add(
      x,
      x.interpolate({
        inputRange: [0, 0.00001 + index * CARD_WIDTH],
        outputRange: [0, -index * CARD_WIDTH],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_WIDTH / 4],
      extrapolate: "clamp",
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.8, 1, 1, 0.7],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0, 1, 1, 0],
  });
  return (
    <Animated.View
      style={[
        styles.card,
        {
          //opacity,
          transform: [{ translateX }, { scale }],
          marginLeft: index === 0 ? 30 : 20,
          marginRight: index === userJournals.length - 1 ? 30 : 20,
        },
      ]}
      key={index}
    >
      <View style={styles.back} />
      <View style={styles.border} />
      <Animated.View style={[styles.shadow, { opacity }]} />
      <Card {...item} />
    </Animated.View>
  );
};

export default WalletCard;
