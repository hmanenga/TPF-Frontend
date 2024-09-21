import {StyleSheet} from 'react-native';
import SPACING from '../../constants/spacing';
import colors from '../../constants/colors';
import FONT_SIZES from '../../constants/fontSizes';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BORDER_RADIUS from '../../constants/borderRadius';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: SPACING.small,
    borderRadius: BORDER_RADIUS.small,
  },
  containerTitle: {
    fontSize: FONT_SIZES.large,
    color: Colors.white,
    padding: SPACING.small,
    marginVertical: SPACING.small,
  },
  taskInput: {
    color: colors.gray,
    padding: SPACING.xsmall,
    backgroundColor: colors.white,
    borderRadius: BORDER_RADIUS.small,
    marginBottom: SPACING.small,
    marginTop: SPACING.medium,
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#7B52AB',
  },
  listHeadline: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 21,
  },
  loadingContainer: { // Add this style
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: '#efefef',
    margin: 20,
    minHeight: 50,
  },
  swipedRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: '#818181',
    margin: 20,
    minHeight: 50,
  },
  swipedConfirmationContainer: {
    flex: 1,
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
});
