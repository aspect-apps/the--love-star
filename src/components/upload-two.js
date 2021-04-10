import React from 'react';
import {View, Text, Image, TouchableOpacity, Button } from 'react-native';
import {styles} from './styles/upload-two-style.js';
import {PrimaryButton} from '../components/primary-button';
import {useNavigation} from '@react-navigation/native';
import { result } from './upload';

export function UploadTwo() {
  const navigation = useNavigation();
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
              // onPress={() => navigation.navigate('Save', {image: result})}
              iconColor="rgb(66, 133, 244)"
            />
        </View>
        <Image
          source={require('../img/upload.png')}
          style={styles.uploadImage}
        />
      </View>
    </View>
  );
}
