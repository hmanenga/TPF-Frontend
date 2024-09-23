import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    futureForecastItemContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius: hp(1.5),
        borderColor: '#eee',
        borderWidth: 1,
        padding: hp('0.5%'),
        marginLeft: 10,
        marginBottom:hp('0.5%'),
        
    },
  itemImage: {
    width: wp(25),
    height: hp(8)
  },
  day: {
    fontSize: hp(1.5),
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: hp(0.5),
    borderRadius: hp(2.5),
    marginBottom: hp('0.5%'),
    textAlign: 'center',
  },
  text: {
    color: '#eee',
    fontSize: hp('1.5%'),
  }
});
