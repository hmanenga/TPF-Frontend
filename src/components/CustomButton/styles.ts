import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 

// Creating & exporting stylesheet
export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: hp(0.5),
    height: hp(5.5)
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
});