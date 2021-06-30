import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {},
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: 'blue',
        marginTop: 20,
    },
    imageReview: {
        alignSelf: 'flex-end',
        marginBottom: 12,
    },
    subtitleView: {
        flexDirection: 'row',
        marginRight: 25,
        fontWeight: 'bold',
        top: 60,
    },
    ratingImage: {
        height: 90.21,
        width: 100,
    },
    ratingText: {
        paddingLeft: 45,
        color: 'grey',
        fontWeight: 'bold',
    },
});

export default styles;