import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActionSheetIOS,
} from 'react-native';
import {styles} from './styles/upload-style.js';
import {Platform} from 'react-native';
import Auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';

export function Upload() {
  _keyExtractor = (item, index) => item.id.toString();
  const [filePath, setFilePath] = useState(null);
  const FileReference = storage().ref(`${Auth().currentUser.uid}-profile.png`);
  const navigation = useNavigation();
  return (
    <View style={styles.backgroundUpload}>
      <View style={styles.uploadContainer}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.uploadMainText}>Photos</Text>
        <TouchableOpacity onPress={onShowActionSheet}>
          <View style={styles.uploadBoxContainer}>
            <Text style={styles.uploadBoxText}>Tap to upload photo</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require('../img/upload.png')}
          style={styles.uploadImage}
        />
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
    navigation.navigate("UploadTwo", { image: result.path })

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
