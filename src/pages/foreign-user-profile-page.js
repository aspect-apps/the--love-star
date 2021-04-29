import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { styles } from './styles/foreign-user-profile-page-style';
import { ProfileImage } from '../components/profile-image';
import { LogoutButton } from '../components/logout-button';
import Firestore from '@react-native-firebase/firestore';


const ForeignUserProfilePage = ({ navigation, route }) => {
    const [posts, setPosts] = useState([]);
    const userId = route.params.uid
    const photoUrl = route.params.photoUrl;
    const displayName = route.params.displayName;

    useEffect(() => {
      navigation.setOptions({
        title: 'Profile',
        headerRight: () => <LogoutButton />,
      });
    }, []);
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
              <View style={styles.profileContainer}>
                  <ProfileImage url={photoUrl} />
                  <Text>{displayName}</Text>
              </View>
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
        .where("userId", "==", userId)
        .onSnapshot({
          next: collection => {
            const collectionDocuments = collection.docs.map(item => item.data());
            setPosts(collectionDocuments);
          },
        });
  
      return unsubscribe;
    }  
  }
  
  export default ForeignUserProfilePage;
  