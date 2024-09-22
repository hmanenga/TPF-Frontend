import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_ML ,
  STANDARD_BORDER_RADIUS,
  STANDARD_LETTER_SPACING,
  STANDARD_SPACING_SM,
} from '../../config/constants'
 

// Creating & exporting stylesheet
export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 45,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
});