import {StyleSheet} from 'react-native';
import {LightThemeColors} from '../../config/colors';
import {
  FONT_SIZE_LG,
  FONT_SIZE_SM,
  STANDARD_BORDER_RADIUS_XLARGE,
} from '../../config/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: LightThemeColors.white,
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  lightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
  },
  lightImage: {
    width: 90,
    height: 225,
  },
  lightImageSmall: {
    width: 65,
    height: 160,
  },
  formContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignContent: 'center',
    paddingTop: 70,
    paddingBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: LightThemeColors.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_LG,
    letterSpacing: 3,
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  inputWrapper: {
    backgroundColor: LightThemeColors.gray,
    padding: 5,
    borderRadius: STANDARD_BORDER_RADIUS_XLARGE,
    marginBottom: 8,
    width: '100%',
  },
  textInput: {
    color: LightThemeColors.white,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#38BDF8',
    padding: 3,
    borderRadius: STANDARD_BORDER_RADIUS_XLARGE,
    marginBottom: 3,
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: LightThemeColors.white,
    textAlign: 'center',
    fontSize: FONT_SIZE_SM,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    color: 'black',
  },
  signupLink: {
    color: '#0284C7',
  },
  error: {
    color: LightThemeColors.error,
    textAlign: 'left',
  }
});
