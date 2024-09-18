// Importing necessary libraries
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import SPACING from '../../constants/spacing';
import FONT_SIZES from '../../constants/fontSizes';

// Defining and exporting a StyleSheet object for the RadioGroup component
export default StyleSheet.create({
  // Styling for the title of the radio group
  radioGroupTitle: {
    fontSize: FONT_SIZES.medium,
    marginVertical: SPACING.small,
    color: colors.primary,
  },
  // Styling for the container of the radio group
  radioGroupContainer: {
    flexDirection: 'row', // Aligns radio buttons vertically
    marginBottom: SPACING.medium,
  },
});