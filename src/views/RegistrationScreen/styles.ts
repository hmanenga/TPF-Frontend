import {StyleSheet} from 'react-native';
import { STANDARD_FLEX, STANDARD_SPACING_SM } from '../../config/constants';
import { LightThemeColors } from '../../config/colors';
import { STANDARD_BORDER_RADIUS } from '../../config/constants';
import { FONT_SIZE_LG, FONT_SIZE_MD, FONT_SIZE_SM } from '../../config/constants';

export default StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    padding: STANDARD_SPACING_SM,
    backgroundColor: LightThemeColors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: LightThemeColors.white,
    elevation: 10,
    marginVertical: STANDARD_SPACING_SM,
    padding: STANDARD_SPACING_SM,
    height: 50,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  topImage: {
    width: '100%',
    height: 130,
  },
  logo: {},
  helloContainer: {},
  helloText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: '500',
    color: 'gray',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#262626',
    marginBottom: STANDARD_SPACING_SM,
  },
  inputIcon: {
    marginLeft: STANDARD_SPACING_SM,
    marginRight: STANDARD_SPACING_SM,
  },
  textInput: {
    flex: STANDARD_FLEX,
  },
  forgotPasswordText: {
    color: LightThemeColors.primary,
    textAlign: 'right',
    width: '90%',
    fontSize: FONT_SIZE_MD,
  },
  signInButtonContainer: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: STANDARD_SPACING_SM,
    justifyContent: 'flex-end',
    width: '90%',
  },
  signIn: {
    color: '#262626',
    fontSize: FONT_SIZE_LG,
    fontWeight: 'bold',
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  createAccountLink: {
    marginTop: STANDARD_SPACING_SM,
    alignSelf: 'center',
    color: LightThemeColors.primary,
    fontSize: FONT_SIZE_MD,
  },
  createText: {
    textDecorationLine: 'underline',
  },
  screenTitleContainer: {
        backgroundColor: LightThemeColors.primary,
        borderRadius: STANDARD_BORDER_RADIUS, //,
        padding: STANDARD_SPACING_SM,
        alignContent: 'center',
        width: '80%',
        alignSelf: 'center'
  },
  screenTitle: {
    fontSize: FONT_SIZE_LG,
    fontWeight: 'bold',
    color: LightThemeColors.white,
    textAlign: 'center',
  }
});
