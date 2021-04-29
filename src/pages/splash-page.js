import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../components/styles/splash-style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const SplashPage = ({navigation}) => {
  return (
    <ScrollView style={styles.backgroundSplash}>
      <View>
        <Image
          source={require('../img/elephantImage.png')}
          style={styles.elephantImage}
        />
        <Text style={styles.titleText}>Be A Star</Text>
        <Text style={styles.subtitleText}>
          Explore the world and create beautiful posts.
        </Text>
        <View>
          <Entypo name="star" style={styles.starIcon} />
          <AntDesign name="heart" style={styles.heartIcon} />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonContainerText}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SplashPage; 
 