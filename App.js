import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SearchScreen } from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            header: (props) => (
              <View style={styles.header}>
                <Text style={styles.headerText}>Search</Text>
              </View>
            ),
            headerBackButtonMenuEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 5,
    marginHorizontal: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
