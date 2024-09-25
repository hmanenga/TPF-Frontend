import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 15,
    position: 'absolute',
    zIndex: 1,
    // Optionally handle notch conditionally
    // top: hasNotch() ? 60 : 20,
    top: 20, // Set a default value if not using hasNotch
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderStartWidth: 5,
    borderColor: 'red',
  },
  text1: {textAlign: 'left', fontSize: 25, fontWeight: 'bold', marginBottom: 5},
  text2: {textAlign: 'left', fontWeight: '500'},
});
