import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles/onboarding-one-style";
import { useNavigation } from "@react-navigation/native";
import { Pins } from "react-native-pins";

export function OnboardingOne() {
  const navigation = useNavigation();
  return (
    <View style={styles.backgroundOnboarding}>
      <View style={styles.onboardingContainer}>
        <Image
          source={require("../img/elephantImage.png")}
          style={styles.elephantImage}
        />
        <Text style={styles.mainText}>Welcome To Love Star</Text>
        <Text style={styles.subText}>
          Were so happy you are here! Before we go to your profile, let us tell
          you whats in store!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("OnboardingTwo")}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonContainerText}>Continue</Text>
          </View>
        </TouchableOpacity>
        <Pins
          style={styles.bottomPins}
          onRef={() => ({})}
          numberOfPins={3}
          numberOfPinsActive={1}
          activeOnly
        />
      </View>
    </View>
  );
}
