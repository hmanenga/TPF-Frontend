
import {StyleSheet} from 'react-native';
import { LightThemeColors } from '../../config/colors';
import { FONT_SIZE_LG, FONT_SIZE_MD, STANDARD_BORDER_RADIUS, STANDARD_FLEX, STANDARD_SPACING_LG, STANDARD_SPACING_MD, STANDARD_SPACING_SM } from '../../config/constants';


export default StyleSheet.create({
  formContainer: {
    flex: STANDARD_FLEX,
    justifyContent: 'center',
    padding: STANDARD_SPACING_SM,
    backgroundColor: LightThemeColors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: LightThemeColors.white,
    elevation: 10,
    marginVertical: STANDARD_SPACING_MD,
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
    marginBottom: STANDARD_SPACING_MD,
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
    marginTop: 120,
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
    marginTop: STANDARD_SPACING_LG,
    alignSelf: 'center',
    color: LightThemeColors.primary,
    fontSize: FONT_SIZE_MD,
  },
  createText: {
    textDecorationLine: 'underline',
  },
});
