import React, { useEffect, useState } from 'react';
import { LogoutButton } from '../components/logout-button';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Profile from '../pages/profile-page';
import ProfilePage from '../pages/profile-page';
// import Upload from '../pages/upload-page';
import UploadPage from '../pages/upload-page';
import PostReviewsPage from '../pages/post-reviews-page';
import { MainFeedPage } from '../components/main-feed-page';
import { ReviewItem } from '../components/review-item';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

export const DashboardPage = ({ navigation }) => {
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
      barStyle={{ backgroundColor: 'rgb(221, 244, 244)' }}>
      <Tab.Screen
        name="Feed"
        component={MainFeedPage}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={27} color={'black'} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            setTitle('Feed');
            event.preventDefault();
            navigation.navigate('Feed');
          },
        })}
      />

      <Tab.Screen
        name="Upload"
        component={UploadPage}
        options={{
          title: 'Add',
          tabBarIcon: ({ color }) => (
            <AntDesign name="camerao" size={27} color={'black'} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            setTitle('Add');
            event.preventDefault();
            navigation.navigate('Upload');
          },
        })}
      />

      <Tab.Screen
        name="Ratings"
        component={PostReviewsPage}
        options={{
          title: 'Ratings',
          tabBarIcon: ({ color }) => (
            <AntDesign name="staro" size={27} color={'black'} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            setTitle('Ratings');
            event.preventDefault();
            navigation.navigate('Ratings');
          },
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={27} color={'black'} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            setTitle('Profile');
            event.preventDefault();
            navigation.navigate('Profile');
          },
        })}
      />
    </Tab.Navigator>
  );

  //   return (
  //     <Tab.Navigator
  //     tabBarOptions={{
  //       tabStyle: {
  //         backgroundColor: 'rgb(221, 244, 244)',
  //       },
  //       activeTintColor: '#fff',}}>
  //       <Tab.Screen
  //         name="Feed"
  //         component={MainFeedPage}
  //         options={{

  //           tabBarIcon: ({color}) => (
  //             <AntDesign name="home" size={27} color={'black'} />
  //           ),
  //         }}
  //         listeners={({navigation}) => ({
  //                     tabPress: event => {
  //                       setTitle('Feed');
  //                       event.preventDefault();
  //                       navigation.navigate('Feed');
  //                     },
  //                   })}
  //       />

  //       <Tab.Screen
  //         name="Upload"
  //         component={UploadPage}
  //         options={{

  //           tabBarIcon: ({color}) => (
  //             <AntDesign name="camera" size={27} color={'black'} />
  //           ),
  //         }}
  //         listeners={({navigation}) => ({
  //           tabPress: event => {
  //             setTitle('Feed');
  //             event.preventDefault();
  //             navigation.navigate('Upload');
  //           },
  //         })}
  //       />

  // <Tab.Screen
  //         name="Ratings"
  //         component={PostReviewsPage}
  //         options={{

  //           tabBarIcon: ({color}) => (
  //             <AntDesign name="staro" size={27} color={'black'} />
  //           ),
  //         }}
  //         listeners={({navigation}) => ({
  //           tabPress: event => {
  //             setTitle('Feed');
  //             event.preventDefault();
  //             navigation.navigate('Ratings');
  //           },
  //         })}
  //       />

  //       <Tab.Screen
  //         name="Profile"
  //         component={ProfilePage}
  //         options={{

  //           tabBarIcon: ({color}) => (
  //             <AntDesign name="user" size={27} color={'black'} />
  //           ),
  //         }}
  //         listeners={({navigation}) => ({
  //           tabPress: event => {
  //             setTitle('Feed');
  //             event.preventDefault();
  //             navigation.navigate('Profile');
  //           },
  //         })}
  //       />
  //     </Tab.Navigator>
  //   );
};
