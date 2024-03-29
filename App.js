import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Totals from "./Components/totals.js";
import AddButton from "./Components/AddButton.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Today" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = () => {
  return (
    <View style={styles.container}>
      <Totals />
      <AddButton />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
