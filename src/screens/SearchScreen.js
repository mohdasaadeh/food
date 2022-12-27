import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { SearchBar } from "../components";

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
