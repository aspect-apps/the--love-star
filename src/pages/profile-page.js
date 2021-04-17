import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, FlatList, Image,  ActionSheetIOS} from 'react-native';
import {styles} from '../components/styles/profile-style';
import Entypo from 'react-native-vector-icons/Entypo';
import {Platform} from 'react-native';
import Auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {LogoutButton} from '../components/logout-button';
import { useRef } from 'react';


const imageData = [
  {
    image: 'https://picsum.photos/200',
  },
  {
    image: 'https://picsum.photos/200',
  },
  {
    image: 'https://picsum.photos/200',
  },
  {
    image: 'https://picsum.photos/200',
  },
];

const ProfilePage = ({navigation}) => {
    const [user, setUser] = useState(null);
  _keyExtractor = (item, index) => item.id.toString();
  const [filePath, setFilePath] = useState(null);
  const fileName = useRef(`${Auth().currentUser.uid}-profile.png`)
  const FileReference = storage().ref(fileName.current);
  useEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerRight: () => <LogoutButton />,
    });
  }, []);

  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.containerGallery}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={imageData}
          ListHeaderComponent={
            <>
              <View style={styles.followerTextContainer}>
                <Text style={styles.followersText}>108 Followers</Text>
                <Entypo name="star" size={24} color="red" />
              </View>

              <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Profile Name</Text>
        <TouchableOpacity onPress={onShowActionSheet}>
          <Image source={{uri: filePath}} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
            </>
          }
          renderItem={({item}) => (
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{uri: item.image}} />
            </View>
          )}
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

    if (!result.cancelled) {
      onUploadImage(result);
    }
  }

  async function onUploadImage(result) {
    try {
      const pathToFile = result.path;
      await FileReference.putFile(pathToFile);

      const url = await storage().ref(fileName.current).getDownloadURL();

      await Firestore().collection('users').add({
        userId: Auth().currentUser.uid,
        avatarUrl: url,
      });

      setFilePath(result.path);
    } catch (e) {
      console.log(e);
    }
  }
};

export default ProfilePage;
