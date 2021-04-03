import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles/logout-button-style";
import { useNavigation } from "@react-navigation/native";

export function LogoutButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onLogout} style={styles.containerStyle}>
      <AntDesign name="logout" size={24} color={"black"} />
    </TouchableOpacity>
  );

  function onLogout() {
    //Logout functionality here
    navigation.pop();
  }
}
