import { StyleSheet } from "react-native";
import { FONT_SIZE_MD, FONT_SIZE_SM } from "../../../config/constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
      padding: wp('1%'),
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heading: {
      fontSize: hp('5%'),
      fontWeight: '100',
    },
    subHeading: {
      fontSize: hp('3%'),
      fontWeight: '300',
    },
    rightAlign: {
      textAlign: 'right',
      marginRight: wp('2%'),
    },
    timezone: {
      fontSize:  hp('1.5%'),
      color: 'black',
    },
    latlong: {
      fontSize: hp('1.5%'),
      color: 'black',
      fontWeight: '600',
    },
    weatherItemContainer: {
      backgroundColor: '#18181b99',
      borderRadius: wp('2.5%'),
      padding: wp('1.6%'),
      marginTop: hp('1%'),
    },
    weatherItem: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    weatherItemTitle: {
      color: '#eee',
      fontSize: hp('2%'),
    },
  
  });
  