
import {StyleSheet} from 'react-native';
import { LightThemeColors } from '../../config/colors';
import {  FONT_SIZE_SM, STANDARD_FLEX, STANDARD_SPACING_LG, STANDARD_SPACING_MD, STANDARD_SPACING_SM, STANDARD_SPACING_XLG } from '../../config/constants';
import { STANDARD_BORDER_RADIUS } from '../../config/constants';
import { FONT_SIZE_MD } from '../../config/constants';

export default StyleSheet.create({
  container: {
    flex: STANDARD_FLEX,
    backgroundColor: LightThemeColors.background,
    padding: 24,
    borderRadius: STANDARD_BORDER_RADIUS,
    marginBottom: STANDARD_SPACING_SM,
  },
  title: {
    fontSize: FONT_SIZE_MD,
    fontWeight: 'bold',
    alignContent: 'center',
    marginBottom: STANDARD_SPACING_SM,
    color: LightThemeColors.primary,
  },
  input: {
    height: 40,
    borderColor: LightThemeColors.border,
    borderWidth: 1,
    borderRadius: STANDARD_BORDER_RADIUS,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: LightThemeColors.white,
  },
  radioButtonContainer: {
    marginTop: STANDARD_SPACING_SM,
    marginBottom: STANDARD_SPACING_XLG,
    borderColor: LightThemeColors.border, // Set border color to white
  },
  labelContainer: {
    backgroundColor: LightThemeColors.background, // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: LightThemeColors.white, // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    borderRadius: STANDARD_BORDER_RADIUS,
    top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
  },
  inputContainer: {
    borderWidth: 1, // Create border
    borderRadius: STANDARD_BORDER_RADIUS, // Not needed. Just make it look nicer.
    padding: STANDARD_SPACING_SM, // Also used to make it look nicer
    zIndex: 0, // Ensure border has z-index of 0
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: STANDARD_SPACING_SM, // Adjust as needed for spacing
  },  
  selectedDateText: {
    marginLeft:STANDARD_SPACING_SM, // Adjust spacing as needed
    marginBottom: STANDARD_SPACING_LG,
    fontSize: FONT_SIZE_SM,
    color: LightThemeColors.text, // Use your color scheme
  },
  errors: {
    color: LightThemeColors.error,
    marginBottom: STANDARD_SPACING_SM,
  }
});
