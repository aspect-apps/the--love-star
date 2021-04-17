import React, {useEffect, useState} from 'react';
import {Image, Text, View, FlatList} from 'react-native';
import {styles} from './styles/main-feed-style';
import {useNavigation} from '@react-navigation/native';
import Firestore from '@react-native-firebase/firestore';

export function MainFeedPage() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  useEffect(onSyncOrders, []);

  console.log(posts);

  return (
    <View>
      <FlatList
        numColumns={1}
        horizontal={false}
        data={posts}
        keyExtractor={(_, index) => index}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: item.imageUrl}}
              style={styles.cardImage}
            />
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.addTitle}</Text>
              {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={{uri: item.avatarURI}}
                  style={styles.profileIcon}
                />
              </TouchableOpacity> */}
            </View>
            <View style={styles.cardContent}>
              <Text>{item.inputCaption}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );

  function onSyncOrders() {
    const unsubscribe = Firestore()
      .collection('posts')
      .onSnapshot({
        next: collection => {
          const collectionDocuments = collection.docs.map(item => item.data());
          setPosts(collectionDocuments);
        },
      });

    return unsubscribe;
  }
}
