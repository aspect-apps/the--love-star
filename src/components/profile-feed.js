import React, { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';
import {styles} from './styles/profile-style';

export function ProfileFeed() {
    const [filePath, setFilePath] = useState(null);
    const [posts, setPosts] = useState([]);
    _keyExtractor = (item, index) => item.id.toString();
    useEffect(onSyncOrders, []);

    return (
       
      <View style={styles.containerGallery}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={posts}
        
          renderItem={({item}) => (
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{uri: item.image}} />
            </View>
          )}
        />
      </View>
    
      );
    
      function onSyncOrders() {
        const unsubscribe = Firestore()
          .collection('posts')
          .where('userId', '==', Auth().currentUser.uid)
          .onSnapshot({
            next: collection => {
              const collectionDocuments = collection.docs.map(item => item.data());
              setPosts(collectionDocuments);
            },
          });
    
        return unsubscribe;
      }
}
