import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundOnboarding: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(245, 221, 221)',
  },
  onboardingContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 320.1,
    top: 45,
  },
  mainText: {
    fontSize: 48,
    letterSpacing: 0.0,
    textAlign: 'center',
  },
  subText: {
    fontSize: 20,
    letterSpacing: 0.0,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    left: 105,
  },
  subSubText: {
    fontSize: 16,
    letterSpacing: 0.0,
    top: 10,
    paddingHorizontal: 80,
    left: 23,
  },
  dividerLine: {
    backgroundColor: 'black',
    height: 1,
    width: 322,
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: 'rgb(221, 244, 244)',
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 126,
    marginVertical: 23,
    marginHorizontal: 36,
    alignItems: 'center',
  },
  buttonContainerText: {
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 0.0,
  },
});
