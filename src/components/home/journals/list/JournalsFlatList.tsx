import React, { useContext, useRef, useEffect } from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";

import WalletCard from "./JournalCard";
import { UserContext } from "../../../../contexts/UserContext";
import { AppContext } from "../../../../contexts/AppContext";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const JournalsFlatList = () => {
  const { viewableItems, setViewableItems } = useContext(AppContext);
  const { userJournals } = useContext(UserContext);

  const x = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
    useNativeDriver: true,
  });

  let currentIndex = 0;

  const _updateIndex = ({ viewableItems }) => {
    // getting the first element visible index
    viewableItems[0] !== undefined
      ? (currentIndex = viewableItems[0].index)
      : null;
  };

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });
  return (
    <View style={styles.container}>
      {userJournals.length !== 0 ? (
        <AnimatedFlatList
          onViewableItemsChanged={_updateIndex}
          viewabilityConfig={viewConfigRef.current}
          scrollEventThrottle={16}
          snapToAlignment={"start"}
          snapToInterval={270 + 40}
          decelerationRate={"fast" /* "normal" */}
          // bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={userJournals.sort(
            (a: { index: number }, b: { index: number }) => a.index - b.index
          )}
          renderItem={({ item, index }) => (
            <WalletCard {...{ index, x, item }} />
          )}
          keyExtractor={(item) => item.id}
          {...{ onScroll }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
});

export { JournalsFlatList };
