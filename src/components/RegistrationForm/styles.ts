import { StyleSheet } from "react-native";
import { STANDARD_SPACING_MD } from "../../config/constants";
 


export default StyleSheet.create({
    formContainer: {
      padding: STANDARD_SPACING_MD,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
  });