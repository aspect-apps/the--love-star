import React from 'react';
import { View, Image } from 'react-native';
import {styles} from './styles/profile-style';
import Auth from '@react-native-firebase/auth';

export function ProfileImage({ size = 200, url = null }) {
  const photoURL = url;

  return (
    <View>
        <Image source={{uri: photoURL}} style={[styles.profileIcon, { width: size, height: size, borderRadius: size * 2 }]} />
    </View>
  )
}