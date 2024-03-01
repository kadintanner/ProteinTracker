import { View, Text, Pressable, StyleSheet } from "react-native";

const AddButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Log Food</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default AddButton;
