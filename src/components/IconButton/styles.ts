import {StyleSheet} from 'react-native';
import { LightThemeColors } from '../../config/colors';

export default StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: LightThemeColors.primary,
  },
});
