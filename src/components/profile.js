import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {styles} from './styles/profile-style';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

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

export function Profile() {
  const navigation = useNavigation();
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
                <TouchableOpacity onPress ={() => navigation.navigate('DashboardPage')}>
                <View style={styles.profileIcon}></View>
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
}
