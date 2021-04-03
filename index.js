/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { GoogleSignin } from "@react-native-community/google-signin";

GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
    webClientId: "156884841393-8p0rjlkv0137jm159oq2ecr34d296dki.apps.googleusercontent.com",
});

AppRegistry.registerComponent(appName, () => App);
