import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/nav-button-style.js";

export function NavButton({ navigation, label, routeName }) {
  return (
    <>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate(routeName)}
      >
        <Text style={styles.buttonContainerText}>{label}</Text>
      </TouchableOpacity>
    </>
  );
}
