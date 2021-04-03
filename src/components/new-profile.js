import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, ActionSheetIOS } from "react-native";
import { styles } from "./styles/new-profile-style";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

export function NewProfile() {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);

  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Profile Name</Text>
        <TouchableOpacity onPress={onShowActionSheet}>
          <Image source={photo} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  function onShowActionSheet(){
    if(Platform.OS === "ios") {
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
        }
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

  async function pickImage(){
    const result = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    if (!result.cancelled) {
      onUploadImage(result);
    }
  }

  function onUploadImage(result){
      //  Upload image to Firebase
      // firebase
      //   .storage()
      //   .ref("profile-pic")
      //   .putFile(result.uri)
      //   .then(() => {
      //     console.log(`Has been successfully uploaded.`);
      //   })
      //   .catch((e) => console.log('uploading image error => ', e));
      setPhoto(result);
  }
}