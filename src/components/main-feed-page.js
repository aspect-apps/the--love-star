import React, {useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';
import Firestore from '@react-native-firebase/firestore';
import { PostItem } from './post-item';


export function MainFeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(onSyncPosts, []);

  return (
    <View>
      <FlatList
        numColumns={1}
        horizontal={false}
        data={posts}
        keyExtractor={(_, index) => index}
        renderItem={({item}) => <PostItem item={item} />}
      />
    </View>
  );
  
  function onSyncPosts() {
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
