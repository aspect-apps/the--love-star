import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 24,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 60
  },
  elephantImage: {
    paddingVertical: 15,
    marginTop: 2,
    alignSelf: 'center'
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 68,
    fontWeight: '600',
    marginBottom: 20,
    fontFamily: 'Copperplate',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonAreaContainer: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center'
  },
});

export default styles;
