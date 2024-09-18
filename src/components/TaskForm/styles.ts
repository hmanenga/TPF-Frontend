import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import SPACING from '../../constants/spacing';
import BORDER_RADIUS from '../../constants/borderRadius';
import FONT_SIZES from '../../constants/fontSizes';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: BORDER_RADIUS.small,
    marginBottom: SPACING.medium,
  },
  title: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    marginBottom: SPACING.small,
    color: colors.primary,
  },
  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.submitButton,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  radioButtonContainer: {
    marginBottom: SPACING.medium,
    marginTop: SPACING.large,
    borderColor: colors.white, // Set border color to white
  },
  labelContainer: {
    backgroundColor: colors.white, // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: colors.white, // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    borderRadius: BORDER_RADIUS.small,
    top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
  },
  inputContainer: {
    borderWidth: 1, // Create border
    borderRadius: BORDER_RADIUS.small, // Not needed. Just make it look nicer.
    padding: SPACING.small, // Also used to make it look nicer
    zIndex: 0, // Ensure border has z-index of 0
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.small, // Adjust as needed for spacing
  },  
  selectedDateText: {
    marginLeft: SPACING.small, // Adjust spacing as needed
    fontSize: FONT_SIZES.medium,
    color: colors.white, // Use your color scheme
  },
  errors: {
    color: colors.error,
  }
});
