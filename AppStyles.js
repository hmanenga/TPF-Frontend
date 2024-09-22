import {StyleSheet} from 'react-native';
import { STANDARD_FLEX } from './src/config/constants';


export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 10,
  },
  linearGradient: {
    flex: STANDARD_FLEX,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});
