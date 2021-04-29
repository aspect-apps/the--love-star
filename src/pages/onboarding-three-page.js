import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {styles} from '../components/styles/onboarding-three-style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Pins} from 'react-native-pins';
import {requestNotifications} from 'react-native-permissions';

const OnboardingThreePage = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Registration',
    });
  }, []);
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
          We will let you know when you get new likes.
        </Text>

        <TouchableOpacity onPress={onAllowNotifcations}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonContainerText}>Allow Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OnboardingFour')}>
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
    navigation.navigate('OnboardingFour');
  }
};

export default OnboardingThreePage;
