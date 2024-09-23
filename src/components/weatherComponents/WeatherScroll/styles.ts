import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    image: {
      width: wp('20%'),
      height: hp('15%'),
    },
    scrollView: {
      backgroundColor: '#18181bcc',
      height: hp('25%'),
      padding: hp('1%'),
    },
    currentTempContainer: {
      flexDirection: 'row',
      backgroundColor: '#00000033',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: wp('2.5%'),
      borderColor: '#eee',
      borderWidth: 1,
      marginBottom:hp('0.5%'),
      padding: hp('0.5%'),
    },
    day: {
      fontSize: hp('2%'),
      color: 'white',
      backgroundColor: '#3c3c44',
      padding: hp('1%'),
      borderRadius: 5,
      textAlign: 'center',
      marginBottom: 15,
    },
    temp: {
      fontSize: hp('2%'),
      color: 'white',
      textAlign: 'center',
    },
    currentTempSubContainer: {
      paddingRight: wp('5%'),
    }
  });
  