import {scale} from 'react-native-size-matters';
import {LightThemeColors} from './colors';

export const STANDARD_FLEX = 1;
export const FONT_SIZE_SM = scale(14);
export const FONT_SIZE_MD = scale(20);
export const FONT_SIZE_LG = scale(26);
export const FONT_SIZE_ML = scale(20);
export const ICON_SIZE_XS = 17;
export const ICON_SIZE_MD = 20;
export const ICON_SIZE = 45;
export const STANDARD_LETTER_SPACING = scale(0.5);
export const STANDARD_LETTER_MD = scale(0.3);
export const STANDARD_LETTER_SM = scale(0.2);
export const STANDARD_VERTICAL_PADDING = scale(2);
export const STANDARD_BORDER_RADIUS = scale(5);
export const STANDARD_SPACING_SM = scale(3);
export const STANDARD_SPACING_MD = scale(4);
export const STANDARD_SPACING_LG = scale(6);
export const STANDARD_SPACING_XLG = scale(12);
export const ICON_SIZES = 20;
export const STANDARD_BUTTON_ICON_SIZE=45;
export const TASK_SCHEMA = 'Task';

export const TASK_PRIORITY_OPTIONS = [
  {
    id: 'High',
    value: 'High',
    label: 'High',
    borderColor: LightThemeColors.text,
    color: LightThemeColors.text,
    selected: true,
  },
  {
    id: 'Medium',
    value: 'Medium',
    label: 'Medium',
    borderColor: LightThemeColors.text,
    color: LightThemeColors.text,
  },
  {
    id: 'Low',
    value: 'Low',
    label: 'Low',
    borderColor: LightThemeColors.text,
    color: LightThemeColors.text,
  },
];
