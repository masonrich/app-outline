import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: colors.secondary,
    marginTop: 30,
    marginBottom: 5,
    height: 55,
    borderRadius: 27.5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    width: "85%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
