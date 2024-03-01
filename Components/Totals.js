import { StyleSheet, View, Text } from "react-native";

const Totals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.numbers}>0</Text>
      <Text>Grams of Protein</Text>
      <Text style={styles.numbers}>0</Text>
      <Text>Calories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  numbers: {
    fontSize: 40,
  },
});

export default Totals;
