import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        autoCapitalize="none"
        autoComplete={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#e9ecef",
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  icon: {
    alignSelf: "center",
    fontSize: 30,
    color: "#495057",
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
    fontSize: 18,
  },
});
