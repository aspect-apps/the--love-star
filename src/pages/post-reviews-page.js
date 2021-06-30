import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, Text, ScrollView } from 'react-native';
import Firestore from '@react-native-firebase/firestore';
import { ListItem, Avatar } from 'react-native-elements';
import styles from './styles/post-reviews-page-style';
import { LogoutButton } from '../components/logout-button';
import { useNavigation } from '@react-navigation/native';

const PostReviewsPage = item => {
    const navigation = useNavigation();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        navigation.setOptions({
            title: 'Ratings',
            headerRight: () => <LogoutButton />,
        });
    }, []);

    useEffect(onSyncReviews, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                {reviews.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Image source={{ uri: l.photoUrl }} style={styles.profilePicture} />
                        <ListItem.Content>
                            <ListItem.Title style={styles.subtitleView}>
                                {l.displayName}
                            </ListItem.Title>
                            <View style={styles.imageReview}>
                                <Avatar source={{ uri: l.image }} style={styles.ratingImage} />
                                <ListItem.Subtitle style={styles.ratingText}>
                                    {l.rating}
                                </ListItem.Subtitle>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </View>
        </ScrollView>
    );

    function onSyncReviews() {
        const unsubscribe = Firestore()
            .collection('ratings')
            .onSnapshot({
                next: collection => {
                    const collectionDocuments = collection.docs.map(item => item.data());
                    setReviews(collectionDocuments);
                },
            });
        return unsubscribe;
    }
};

export default PostReviewsPage;
