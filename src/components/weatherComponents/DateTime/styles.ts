import { StyleSheet } from "react-native";
import { FONT_SIZE_MD, FONT_SIZE_SM } from "../../../config/constants";

export const styles = StyleSheet.create({
    container: {
      padding: 15, //STANDARD_SPACING_SM
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heading: {
      fontSize: 45,
      fontWeight: '100',
    },
    subHeading: {
      fontSize: 25,
      fontWeight: '300',
    },
    rightAlign: {
      textAlign: 'right',
    },
    timezone: {
      fontSize: FONT_SIZE_SM,
      color: 'black',
    },
    latlong: {
      fontSize: 16,
      color: 'black',
      fontWeight: '600',
    },
    weatherItemContainer: {
      backgroundColor: '#18181b99',
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
    },
    weatherItem: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    weatherItemTitle: {
      color: '#eee',
      fontSize: 14,
    },
  
  });
  