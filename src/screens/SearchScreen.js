import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { SearchBar } from "../components";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onSubmit={() => console.log(term)}
      />
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
