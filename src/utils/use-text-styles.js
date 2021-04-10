import {StyleSheet} from 'react-native';

export function useTextStyles() {
  return StyleSheet.create({
    titleStyle: {
      fontSize: 32,
      fontFamily: 'DM Sans',
    },
    titleLightStyle: {
      fontSize: 32,
      fontFamily: 'DM Sans',
    },
    subtitleStyle: {
      fontSize: 26,
      fontFamily: 'DM Sans',
    },
  });
}
