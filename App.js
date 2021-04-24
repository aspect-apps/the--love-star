import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './src/pages/login-page';
import Auth from '@react-native-firebase/auth';
import SplashPage from './src/pages/splash-page';
import ProfilePage from './src/pages/profile-page';
import OnboardingOnePage from './src/pages/onboarding-one-page';
import OnboardingTwoPage from './src/pages/onboarding-two-page';
import OnboardingThreePage from './src/pages/onboarding-three-page';
import OnboardingFourPage from './src/pages/onboarding-four-page';
import NewProfilePage from './src/pages/new-profile-page';
import AddCaptionPage from './src/pages/add-caption-page';
import UploadPage from './src/pages/upload-page';
import {DashboardPage} from './src/pages/dashboard-page';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export default function App() {
  const user = Auth().currentUser;
  const isLoggedIn = user !== null;
  SplashScreen.hide();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'Profile' : 'Splash'}
        screenOptions={{
          title: 'Love Star',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'rgb(221, 244, 244)',
          },
        }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen
          name="OnboardingOne"
          component={OnboardingOnePage}
          options={{headerLeft: null}}
        />
        <Stack.Screen
          name="OnboardingTwo"
          component={OnboardingTwoPage}
          options={{headerLeft: null}}
        />
        <Stack.Screen
          name="OnboardingThree"
          component={OnboardingThreePage}
          options={{headerLeft: null}}
        />
        <Stack.Screen
          name="OnboardingFour"
          component={OnboardingFourPage}
          options={{headerLeft: null}}
        />
        <Stack.Screen
          name="NewProfile"
          component={NewProfilePage}
          options={{headerLeft: null}}
        />
        <Stack.Screen name="Upload" component={UploadPage} />
        <Stack.Screen name="AddCaption" component={AddCaptionPage} />
        <Stack.Screen name="DashboardPage" component={DashboardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
