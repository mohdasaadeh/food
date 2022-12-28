import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { getRestaurantsByTerm } from "../services";
import { SearchBar } from "../components";

export const SearchScreen = () => {
  const [term, setTerm] = useState("burger");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const resolveAction = (result) => {
    setData(result);
  };

  const rejectAction = (error) => {
    console.log(error.code);

    setError(error);
  };

  useEffect(() => {
    getRestaurantsByTerm(term, resolveAction, rejectAction);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchBar
        term={term}
        setTerm={setTerm}
        onSubmit={() => getRestaurantsByTerm(term, resolveAction, rejectAction)}
      />
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
