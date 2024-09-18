import { StyleSheet } from "react-native";
import SPACING from "../../constants/spacing";


export default StyleSheet.create({
    formContainer: {
      padding: SPACING.medium,
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