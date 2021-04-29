import React, {useEffect, useState} from 'react';
import {LogoutButton} from '../components/logout-button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Profile from '../pages/profile-page';
import Upload from '../pages/upload-page';
import {MainFeedPage} from '../components/main-feed-page';

const Tab = createMaterialBottomTabNavigator();

export const DashboardPage = ({navigation}) => {
  const [title, setTitle] = useState('Feed');
  useEffect(() => {
    navigation.setOptions({
      title,
      headerLeft: null,
      headerRight: () => <LogoutButton />,
    });
  }, [title]);

  return (
    <Tab.Navigator
      labeled={false}
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'rgb(221, 244, 244)'}}>
      <Tab.Screen
        name="Feed"
        component={MainFeedPage}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={27} color={'black'} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            setTitle('Feed');
            event.preventDefault();
            navigation.navigate('Feed');
          },
        })}
      />

      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          title: 'Add',
          tabBarIcon: ({color}) => (
            <AntDesign name="camera" size={27} color={'black'} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            setTitle('Add');
            event.preventDefault();
            navigation.navigate('Upload');
          },
        })}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={27} color={'black'} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            setTitle('Profile');
            event.preventDefault();
            navigation.navigate('Profile');
          },
        })}
      />
    </Tab.Navigator>
  );
};
