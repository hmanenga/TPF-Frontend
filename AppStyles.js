import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import colors from './src/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});
