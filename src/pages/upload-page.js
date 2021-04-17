import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActionSheetIOS,
} from 'react-native';
import {styles} from '../components/styles/upload-style';
import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const UploadPage = ({navigation}) => {
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
          source={{
            uri:
              'https://images.unsplash.com/photo-1455810149947-5009dd11b762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          }}
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

    if (!result.cancelled) {
      navigation.navigate('AddCaption', {image: result.path});
    }
  }

  async function pickImage() {
    const result = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    if (!result.cancelled) {
      navigation.navigate('AddCaption', {image: result.path});
    }
  }
};

export default UploadPage;
