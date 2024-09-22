// Importing necessary libraries
import { StyleSheet } from 'react-native';
import { LightThemeColors } from '../../config/colors';
import { FONT_SIZE_MD, STANDARD_SPACING_LG, STANDARD_SPACING_MD } from '../../config/constants';
 
 

// Defining and exporting a StyleSheet object for the RadioGroup component
export default StyleSheet.create({
  // Styling for the title of the radio group
  radioGroupTitle: {
    fontSize: FONT_SIZE_MD,
    marginVertical: STANDARD_SPACING_MD,
    color: LightThemeColors.text,
  },
  // Styling for the container of the radio group
  radioGroupContainer: {
    flexDirection: 'row', // Aligns radio buttons vertically
    marginBottom: STANDARD_SPACING_LG,
  },
});