import "./src/index";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./src/pages/login-page";
import * as firebase from 'firebase';
import SplashPage from "./src/pages/splash-page";
import ProfilePage from "./src/pages/profile-page";
import OnboardingOnePage from "./src/pages/onboarding-one-page";
import OnboardingTwoPage from "./src/pages/onboarding-two-page";
import OnboardingThreePage from "./src/pages/onboarding-three-page";
import OnboardingFourPage from "./src/pages/onboarding-four-page";
import NewProfilePage from "./src/pages/new-profile-page";
import UploadPageTwo from "./src/pages/upload-two-page";
import UploadPage from "./src/pages/upload-page";
import HomePage from "./src/pages/home-page";
import CameraUploadPage from "./src/pages/camera-upload-page";
import SavePage from "./src/pages/save-page";

const Stack = createStackNavigator();

export default function App() {
  const user = firebase.auth().currentUser;
  const isLoggedIn = user !== null

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "Profile" : "Splash"}
        screenOptions={{
          title: "Love Star",
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "rgb(221, 244, 244)",
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen
          name="OnboardingOne"
          component={OnboardingOnePage}
          options={{ headerLeft: null }}
        />
        <Stack.Screen
          name="OnboardingTwo"
          component={OnboardingTwoPage}
          options={{ headerLeft: null }}
        />
        <Stack.Screen
          name="OnboardingThree"
          component={OnboardingThreePage}
          options={{ headerLeft: null }}
        />
        <Stack.Screen
          name="OnboardingFour"
          component={OnboardingFourPage}
          options={{ headerLeft: null }}
        />
        <Stack.Screen
          name="NewProfile"
          component={NewProfilePage}
          options={{ headerLeft: null }}
        />
        <Stack.Screen name="CameraUpload" component={CameraUploadPage} />
        <Stack.Screen name="Upload" component={UploadPage} />
        <Stack.Screen name="UploadTwo" component={UploadPageTwo} />
        <Stack.Screen name="Save" component={SavePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

