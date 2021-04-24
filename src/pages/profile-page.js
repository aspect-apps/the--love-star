import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, ActionSheetIOS, TextInput, ActivityIndicator} from 'react-native';
import {styles} from '../components/styles/profile-style';
import Entypo from 'react-native-vector-icons/Entypo';
import {Platform} from 'react-native';
import Auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {LogoutButton} from '../components/logout-button';
import Firestore from '@react-native-firebase/firestore';
import { useRef } from 'react';
import { ProfileImage } from '../components/profile-image';

const ProfilePage = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const initialProfileName = Auth().currentUser.displayName;
  const [profileName, setProfileName] = useState(initialProfileName);
  const fileName = useRef(`${Auth().currentUser.uid}-profile.png`)
  const FileReference = storage().ref(fileName.current);
  const photoURL = Auth().currentUser.photoURL;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerRight: () => <LogoutButton />,
    });
  }, []);
  useEffect(onSaveProfileName, [profileName])
  useEffect(onSyncPosts, []);

  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.containerGallery}> 
        <FlatList
          numColumns={3}
          horizontal={false}
          keyExtractor={(_, index) => index}
          data={posts}
          ListHeaderComponent={
            <>
              <View style={styles.followerTextContainer}>
                <Text style={styles.followersText}>108 Followers</Text>
                <Entypo name="star" size={24} color="red" />
              </View>

              <View style={styles.profileContainer}>
              <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Profile Name"
                value={profileName}
                onChangeText={setProfileName}
                style={styles.profileText} 
              />
                <TouchableOpacity onPress={onShowActionSheet}>
                  <ProfileImage />
                  {isLoading && <ActivityIndicator size="large" />}
                </TouchableOpacity>
              </View>
            </>
          }
          renderItem={({item}) => (
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{uri: item.imageUrl}} />
            </View>
          )}
        />
      </View>
    </View>
  );

  function onSyncPosts() {
    const unsubscribe = Firestore()
      .collection('posts')
      .where("userId", "==", Auth().currentUser.uid)
      .onSnapshot({
        next: collection => {
          const collectionDocuments = collection.docs.map(item => item.data());
          setPosts(collectionDocuments);
        },
      });

    return unsubscribe;
  }

  async function onSaveProfileName(){
    await Auth().currentUser.updateProfile({
      displayName: profileName,
    });
  }

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
    setIsLoading(true);

    const pathToFile = result.path;
    await FileReference.putFile(pathToFile);
    
    const url = await storage().ref(fileName.current).getDownloadURL();

    await Auth().currentUser.updateProfile({
      photoURL: url,
    });

    setIsLoading(false);
  }
};

export default ProfilePage;
