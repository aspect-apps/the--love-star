import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundProfile: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(245, 221, 221)',
    paddingHorizontal: 11,
  },
  followerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 12,
  },
  followersText: {
    color: 'rgb(71, 71, 71)',
    letterSpacing: 0.0,
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileText: {
    color: 'rgb(36, 52, 67)',
    letterSpacing: 0.0,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profileIcon: {
    borderRadius: 475,
    backgroundColor: 'white',
    marginVertical: 32,
  },
  container: {
    flex: 1,
  },
  containerGallery: {
    flex: 1,
  },
  containerImage: {
    width: '32%',
    marginHorizontal: 4,
    marginVertical: 4,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
});
