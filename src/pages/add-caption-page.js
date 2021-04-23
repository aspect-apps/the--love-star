import React, {useRef, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import {styles} from '../components/styles/add-caption-style';
import {PrimaryButton} from '../components/primary-button';
import storage from '@react-native-firebase/storage';
import Auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';
import Firestore from '@react-native-firebase/firestore';
import { StackActions } from '@react-navigation/routers';

const AddCaptionPage = ({navigation, route}) => {
  const popAction = StackActions.pop(1);
  const fileName = useRef(`${Auth().currentUser.uid}-${uuid.v4()}.png`);
  const FileReference = storage().ref(fileName.current);
  console.log({ route });
  const imageUrl = route.params.image;
  const [addTitle, setAddTitle] = useState('');
  const [inputCaption, setInputCaption] = useState('');
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
        <SafeAreaView>
        <Image source={{uri: imageUrl}} style={styles.uploadImage} />
        <TextInput 
         autoCapitalize="none"
         autoCorrect={false}
         placeholder="Add Title"
         value={addTitle}
         onChangeText={setAddTitle}
         style={styles.inputStyle} 
        />
        <TextInput 
         autoCapitalize="none"
         autoCorrect={false}
         placeholder="Add Caption"
         value={inputCaption}
         onChangeText={setInputCaption}
         style={styles.inputStyle} 
        />
        </SafeAreaView>
      </View>
    </View>
  );

  async function onUploadImage(path) {
    await FileReference.putFile(path);
    const url = await storage().ref(fileName.current).getDownloadURL();

    const result = await Firestore().collection('posts').add({
      id: uuid.v4(),
      imageUrl: url,
      addTitle,
      inputCaption,
    });
    console.log(result);
    navigation.dispatch(popAction);
  }
}; 
export default AddCaptionPage;
