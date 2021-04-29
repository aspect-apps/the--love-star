import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundOnboarding: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(245, 221, 221)',
  },
  onboardingContainer: {
    alignItems: 'center',
    paddingVertical: 31,
  },
  mainText: {
    fontSize: 20,
    letterSpacing: 0.0,
    top: 93.6,
    textAlign: 'center',
    fontFamily: "Copperplate",
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 23,
    letterSpacing: 0.0,
    textAlign: 'center',
    paddingHorizontal: 106,
    paddingVertical: 155,
    fontFamily: "Copperplate"
  },
  chatImage: {
    width: 211,
    height: 176,
    marginBottom: 50
  },
  bottomText: {
    fontSize: 26,
    textAlign: 'center',
    letterSpacing: 0.0,
    fontFamily: "Copperplate",
    color: 'blue'
  },
});
