import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActionSheetIOS,
} from 'react-native';
import {styles} from './styles/new-profile-style';
import {Platform} from 'react-native';
import Auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export function NewProfile() {
  _keyExtractor = (item, index) => item.id.toString();
  const [filePath, setFilePath] = useState(null);
  const FileReference = storage().ref(`${Auth().currentUser.uid}-profile.png`);

  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Profile Name</Text>
        <TouchableOpacity onPress={onShowActionSheet}>
          <Image source={{uri: filePath}} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  function onShowActionSheet() {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Open Library', 'Take Photo'],
          cancelButtonIndex: 0,
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            pickImage();
          } else if (buttonIndex === 2) {
            takePicture();
          }
        },
      );
    }
  }

  async function takePicture() {
    const result = await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    onUploadImage(result);
  }

  async function pickImage() {
    const result = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    if (!result.cancelled) {
      onUploadImage(result);
    }
  }

  async function onUploadImage(result) {
    const pathToFile = result.path;
    await FileReference.putFile(pathToFile);
    setFilePath(result.path);
  }
}
