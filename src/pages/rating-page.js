import React, { useState } from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import styles from './styles/rating-page-style';
import Rating from 'react-native-easy-rating';
import Auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';
import Firestore from '@react-native-firebase/firestore';
import { PrimaryButton } from '../components/primary-button';

const RatingPage = ({ route, navigation }) => {
    const imageUrl = route.params.image;
    const [rating, setRating] = useState();
    const userPhotoURL = Auth().currentUser.photoURL;
    const userDisplayName = Auth().currentUser.displayName;

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.uploadImage} />
            <Rating
                rating={rating}
                max={5}
                iconWidth={24}
                iconHeight={24}
                onRate={setRating}
            />
            <View>
                <PrimaryButton label="Submit" onPress={() => onNewRating(imageUrl)} />
            </View>
        </SafeAreaView>
    );

    async function onNewRating() {
        try {
            await Firestore().collection('ratings').add({
                createdAt: Firestore.FieldValue.serverTimestamp(),
                id: uuid.v4(),
                image: imageUrl,
                photoUrl: userPhotoURL,
                displayName: userDisplayName,
                rating,
                userId: Auth().currentUser.uid,
            });
            navigation.navigate('Feed');
        } catch (e) {
            console.log(e);
        }
    }
};

export default RatingPage;
