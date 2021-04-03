/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { GoogleSignin } from "@react-native-community/google-signin";

GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
    webClientId: "com.googleusercontent.apps.659842937776-sgoeqb6ipq5krbj17r1tja3bj7466u4d",
});

AppRegistry.registerComponent(appName, () => App);
