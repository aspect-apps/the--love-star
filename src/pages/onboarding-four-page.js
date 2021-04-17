import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../components/styles/onboarding-four-style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

const OnboardingFourPage = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Finished!',
    });
  }, []);
  return (
    <ScrollView style={styles.backgroundOnboarding}>
      <View style={styles.onboardingContainer}>
        <AntDesign name="checkcircle" size={74.4} color="rgb(221, 244, 244)" />
        <Text style={styles.mainText}>Your account has now been created!</Text>
        <Text style={styles.subText}>
          Congratulations! Press next to see your profile and upload a picture!
        </Text>
        <Image
          source={require('../img/elephant.png')}
          style={styles.chatImage}
        />
        <TouchableOpacity onPress={() => navigation.navigate('DashboardPage')}>
          <View>
            <Text style={styles.bottomText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OnboardingFourPage;
