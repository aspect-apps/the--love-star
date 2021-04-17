import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundOnboarding: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(245, 221, 221)',
  },
  onboardingContainer: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  mainText: {
    fontSize: 30,
    letterSpacing: 0.0,
    top: 87,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 18,
    letterSpacing: 0.0,
    textAlign: 'center',
    paddingHorizontal: 51,
    paddingVertical: 123,
  },
  buttonContainer: {
    backgroundColor: 'rgb(221, 244, 244)',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 71,
    marginVertical: 82,
    marginHorizontal: 36,
    alignItems: 'center',
  },
  buttonContainerText: {
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 0.0,
  },
  bottomText: {
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 0.0,
    marginBottom: 25,
  },
});
