import React, { useState, useEffect, useRef } from "react";
import Constants from "expo-constants";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { styles } from "./styles/onboarding-three-style.js";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Pins } from "react-native-pins";
import {requestNotifications} from 'react-native-permissions';


export function OnboardingThree() {
  const navigation = useNavigation();

  return (
    <View style={styles.backgroundOnboarding}>
      <View style={styles.onboardingContainer}>
        <Ionicons
          name="notifications-circle-outline"
          size={123}
          color="rgb(221, 244, 244)"
        />
        <Text style={styles.mainText}>Allow Notifications</Text>
        <Text style={styles.subText}>
          We will let you know when you get new likes and followers.
        </Text>

        <TouchableOpacity onPress={onAllowNotifcations}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonContainerText}>Allow Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomText}>Not Now</Text>
        </TouchableOpacity>

        <Pins
          onRef={() => ({})}
          numberOfPins={3}
          numberOfPinsActive={3}
          activeOnly
        />
      </View>
    </View>
  );

  async function onAllowNotifcations() {
    await requestNotifications(['alert', 'sound']);
    navigation.navigate("OnboardingFour");
  }
}
