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
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const LoginPage = ({navigation}) => {
  const backgroundImage = require('../img/test.jpg');
  const elephantImage = require('../img/elephant-background.png');
  return (
    <ScrollView>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <SafeAreaView style={styles.containerStyle}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Be A Star</Text>
            <Image source={elephantImage} style={styles.elephantImage} />
          </View>
          <View style={styles.buttonAreaContainer}>
            <PrimaryButton
              label="Continue with Google"
              onPress={onGoogleButtonPress}
              iconName="google"
              iconColor="rgb(66, 133, 244)"
            />
            <PrimaryButton
              label="Continue with Facebook"
              onPress={onFacebookButtonPress}
              iconName="facebook-square"
              iconColor="rgb(66, 103, 178)"
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
          'Google authentication has failed. If this persists, contact us',
          [{text: 'Close', style: 'destructive'}],
        );
      }
    }
  }

  async function onFacebookButtonPress() {
    try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    await auth().signInWithCredential(facebookCredential);
    
    navigation.navigate('OnboardingOne');
  } catch(error) {
    console.log({error});
  }
  }
};


export default LoginPage;
