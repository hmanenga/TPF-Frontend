import {StyleSheet} from 'react-native';
import {LightThemeColors} from '../../config/colors';
import {STANDARD_BORDER_RADIUS_XLARGE} from '../../config/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    width: wp(22.22),
    height: hp(29),
  },
  lightImageSmall: {
    width: wp(18),
    height: hp(22.9),
  },
  formContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignContent: 'center',
    paddingTop: hp(3),
    paddingBottom: hp(0.7),
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: LightThemeColors.white,
    fontWeight: 'bold',
    fontSize: hp(3),
    letterSpacing: hp(0.5),
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: wp(1),
    paddingHorizontal: wp(1),
  },
  inputWrapper: {
    backgroundColor: LightThemeColors.gray,
    padding: hp(0.5),
    borderRadius: STANDARD_BORDER_RADIUS_XLARGE,
    marginBottom: hp(0.8),
    width: '100%',
  },
  textInput: {
    color: LightThemeColors.white,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#38BDF8',
    padding: hp(1.5),
    borderRadius: STANDARD_BORDER_RADIUS_XLARGE,
    marginBottom: hp(0.7),
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: LightThemeColors.white,
    textAlign: 'center',
    fontSize: hp(2),
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(0.8),
  },
  signupText: {
    color: 'black',
  },
  signupLink: {
    color: '#0284C7',
  },
  error: {
    color: LightThemeColors.error,
  },
});
