import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './styles/login-page-style';
import {PrimaryButton} from '../components/primary-button';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import Auth from '@react-native-firebase/auth';

const LoginPage = ({navigation}) => {
  const backgroundImage = require('../img/test.jpg');
  const elephantImage = require('../img/elephant-background.png');
  return (
    <ScrollView>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <SafeAreaView style={styles.containerStyle}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Love Star</Text>
            <Image source={elephantImage} style={styles.elephantImage} />
          </View>
          <View style={styles.buttonAreaContainer}>
            <PrimaryButton
              label="Continue with Google"
              onPress={onGoogleButtonPress}
              iconName="google"
              iconColor="rgb(66, 133, 244)"
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );

  async function onGoogleButtonPress() {
    try {
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken;
      // Create a Google credential with the token
      const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential into Firebase (Auth() is Firebase)
      await Auth().signInWithCredential(googleCredential);

      navigation.navigate('OnboardingOne');
    } catch (e) {
      if (e.code !== statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert(
          'Google Login Failure',
          'Google authentication has falied. If this persists, contact us',
          [{text: 'Close', style: 'destructive'}],
        );
      }
    }
  }
};

export default LoginPage;
