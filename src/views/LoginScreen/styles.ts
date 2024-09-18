import {StyleSheet} from 'react-native';
import SPACING from '../../constants/spacing';
import colors from '../../constants/colors';
import BORDER_RADIUS from '../../constants/borderRadius';
import FONT_SIZES from '../../constants/fontSizes';

export default StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: SPACING.medium,
    backgroundColor: colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS.xlarge,
    backgroundColor: colors.white,
    elevation: 10,
    marginVertical: SPACING.medium,
    padding: SPACING.xsmall,
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
    marginBottom: SPACING.medium,
  },
  inputIcon: {
    marginLeft: SPACING.small,
    marginRight: SPACING.xsmall,
  },
  textInput: {
    flex: 1,
  },
  forgotPasswordText: {
    color: colors.primary,
    textAlign: 'right',
    width: '90%',
    fontSize: FONT_SIZES.medium,
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
    fontSize: FONT_SIZES.xlarge,
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
    marginTop: SPACING.xlarge,
    alignSelf: 'center',
    color: colors.primary,
    fontSize: FONT_SIZES.medium,
  },
  createText: {
    textDecorationLine: 'underline',
  },
});
