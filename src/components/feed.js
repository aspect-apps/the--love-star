import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles/feed-style';
import {useNavigation} from '@react-navigation/native';

export function Feed() {
  _keyExtractor = (item, index) => item.id.toString();
  const navigation = useNavigation();
  const DATA = [
    {
      id: 1,
      postTitle: 'Planet of Nature',
      avatarURI:
        'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      imageURI:
        'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      randomText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      id: 2,
      postTitle: 'Lampost',
      avatarURI:
        'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      imageURI:
        'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1648&q=80',
      randomText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
  ];

  return (
    <View>
      <FlatList
        numColumns={1}
        horizontal={false}
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: item.imageURI}}
              style={styles.cardImage}
            />
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.postTitle}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={{uri: item.avatarURI}}
                  style={styles.profileIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cardContent}>
              <Text>{item.randomText}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
