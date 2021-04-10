import React, { useRef } from 'react';
import {View, Text, Image, TouchableOpacity, Button } from 'react-native';
import {styles} from './styles/upload-two-style.js';
import {PrimaryButton} from '../components/primary-button';
import storage from '@react-native-firebase/storage';
import Auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';
import Firestore from '@react-native-firebase/firestore';

export function UploadTwo({ navigation, route }) {
  const fileName = useRef(`${Auth().currentUser.uid}-${uuid.v4()}.png`);
  const FileReference = storage().ref(fileName.current);
  const imageUrl = route.params.image;

  return (
    <View style={styles.backgroundUpload}>
      
      <View style={styles.uploadContainer}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.uploadMainText}>
          Post your media if you are satisfied.
        </Text>
        <View style={styles.buttonAreaContainer}>
        <PrimaryButton
              label="Save"
              onPress={() => onUploadImage(imageUrl)}
              iconColor="rgb(66, 133, 244)"
            />
        </View>
        <Image
          source={{ uri: imageUrl }}
          style={styles.uploadImage}
        />
      </View>
    </View>
  );

  async function onUploadImage(path) {
    await FileReference.putFile(path);
    const url = await storage().ref(fileName.current).getDownloadURL();

    const result = await Firestore().collection('posts').add({
      id: uuid.v4(),
      imageUrl: url,
      caption: "My first caption!",
    });
    console.log(result);
    // navigation.navigate('Save');
  }
}
