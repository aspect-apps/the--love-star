import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles/onboarding-four-style.js";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export function OnboardingFour() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.backgroundOnboarding}>
      <View style={styles.onboardingContainer}>
        <AntDesign name="checkcircle" size={74.4} color="rgb(221, 244, 244)" />
        <Text style={styles.mainText}>Your account has now been created!</Text>
        <Text style={styles.subText}>
          Congratulations! Click next to see your profile and upload a picture!
        </Text>
        <Image
          source={require("../img/elephant.png")}
          style={styles.chatImage}
        />
        <TouchableOpacity onPress={() => navigation.navigate("NewProfile")}>
          <View>
            <Text style={styles.bottomText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
