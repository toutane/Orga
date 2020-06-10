import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeAvatar({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Account")}
      activeOpacity={0.8}
    >
      <Image
        style={styles.image}
        source={{
          uri:
            "https://images.unsplash.com/photo-1561997895-2e5d84cc3ac2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
});
