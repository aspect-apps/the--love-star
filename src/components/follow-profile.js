import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles/follow-profile-style';
import Entypo from 'react-native-vector-icons/Entypo';

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

export function FollowProfile() {
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
                <View style={styles.profileIcon}></View>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followButtonText}>Follow</Text>
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
