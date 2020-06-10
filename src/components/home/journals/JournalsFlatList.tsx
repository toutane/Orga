import React from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";

import WalletCard from "./JournalCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const journals = [
  {
    id: "1",
    color: "lightseagreen",
  },
  {
    id: "2",
    color: "orange",
  },
  {
    id: "3",
    color: "coral",
  },
  {
    id: "4",
    color: "crimson",
  },
  {
    id: "5",
    color: "darkslateblue",
  },
  {
    id: "6",
    color: "deeppink",
  },
];

const JournalsFlatList = () => {
  const x = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
    useNativeDriver: true,
  });
  return (
    <View style={styles.container}>
      <AnimatedFlatList
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={270 + 40}
        decelerationRate={"fast" /* "normal" */}
        // bounces={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={journals}
        renderItem={({ item, index }) => <WalletCard {...{ index, x, item }} />}
        keyExtractor={(item) => item.id}
        {...{ onScroll }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
});

export { JournalsFlatList };
