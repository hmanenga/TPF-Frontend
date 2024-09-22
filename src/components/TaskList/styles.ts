import { FONT_SIZE_MD, FONT_SIZE_SM, STANDARD_FLEX, STANDARD_SPACING_MD, STANDARD_SPACING_SM } from './../../config/constants';
import {StyleSheet} from 'react-native';
import { LightThemeColors } from '../../config/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { FONT_SIZE_LG, STANDARD_BORDER_RADIUS } from '../../config/constants';

export default StyleSheet.create({
  container: {
    padding: STANDARD_SPACING_SM,
    borderRadius: STANDARD_BORDER_RADIUS,
  },
  containerTitle: {
    fontSize: FONT_SIZE_LG,
    color: LightThemeColors.white,
    padding: STANDARD_SPACING_SM,
    marginVertical: STANDARD_SPACING_SM,
  },
  taskInput: {
    color: LightThemeColors.gray,
    padding: STANDARD_SPACING_SM,
    backgroundColor: LightThemeColors.white,
    borderRadius: STANDARD_BORDER_RADIUS,
    marginBottom: STANDARD_SPACING_SM,
    marginTop: STANDARD_SPACING_MD,
  },
  listHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#7B52AB',
    fontWeight: 'bold',
    fontSize: FONT_SIZE_SM,
    color: LightThemeColors.primary
  },
  listHeadline: {
    color: LightThemeColors.text,
    fontWeight: 'bold',
    fontSize: 21,
  },
  loadingContainer: { // Add this style
    flex: STANDARD_FLEX,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LightThemeColors.background,
  },
  row: {
    flexDirection: 'row',
    flex: STANDARD_FLEX,
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: '#efefef',
    margin: 20,
    minHeight: 50,
  },
  swipedRow: {
    flexDirection: 'row',
    flex: STANDARD_FLEX,
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: '#818181',
    margin: 20,
    minHeight: 50,
  },
  swipedConfirmationContainer: {
    flex: STANDARD_FLEX,
  },
  deleteConfirmationText: {
    color: '#fcfcfc',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#b60000',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  deleteButtonText: {
    color: '#fcfcfc',
    fontWeight: 'bold',
    padding: 3,
  },
  noItemText: {
    color: LightThemeColors.text,
    alignSelf: 'center',
    marginBottom: STANDARD_SPACING_SM,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    marginTop: 20
  }
});
