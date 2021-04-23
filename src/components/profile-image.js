import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import {styles} from './styles/profile-style';
import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

export function ProfileImage() {
  const [filePath, setFilePath] = useState(null);
  useEffect(onSyncProfile, []);

  return (
    <View>
        <Image source={{uri: filePath}} style={styles.profileIcon} />
    </View>
  )

  function onSyncProfile() {
    const unsubscribe = Firestore()
      .collection('users')
      .where('userId', '==', Auth().currentUser.uid)
      .onSnapshot({
        next: collection => {
          const userDocument = collection.docs.map(item => item.data())[0];

          if(userDocument) {
            setFilePath(userDocument.avatarUrl);
          }
        },
      });

    return unsubscribe;
  }
  }