import {StyleSheet} from 'react-native';
import {LightThemeColors} from '../../config/colors';
import {
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_SPACING_MD,
} from '../../config/constants';

// Function to create dynamic styles
export const createDynamicContentStyle = (translateX: any) => ({
  flex: STANDARD_FLEX,
  transform: [{translateX}],
  height: 94,
  paddingVertical: 0,
  paddingHorizontal: 15,
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: 10,
});

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
  },
  deleteButton: {
    width: 100,
    height: '100%',
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -100,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    width: 100,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: LightThemeColors.text,
    fontSize: FONT_SIZE_SM,
    marginLeft: 3,
  },
  subText: {
    color: LightThemeColors.subText,
    fontSize: FONT_SIZE_SM,
    marginLeft: 3,
  },
  verticalLine: {
    height: '100%',
    backgroundColor: '#c70284',
    padding: 3,
    marginRight: 6,
  },
  taskInfo: {flexDirection: 'column', alignItems: 'flex-start', gap: 10},
  priority: {flexDirection: 'column', gap: 10, alignItems: 'center'},
  editText: {
    color: LightThemeColors.white,
    backgroundColor: '#c70284',
    borderRadius: STANDARD_BORDER_RADIUS,
    padding: STANDARD_SPACING_MD,
    textAlign: 'center',
  },
});
