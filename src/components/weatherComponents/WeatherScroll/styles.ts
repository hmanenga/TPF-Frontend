import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
    },
    scrollView: {
      backgroundColor: '#18181bcc',
      padding: 30,
    },
    currentTempContainer: {
      flexDirection: 'row',
      backgroundColor: '#00000033',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 10,
      borderColor: '#eee',
      borderWidth: 1,
      marginBottom: 5,
      padding: 10
    },
    day: {
      fontSize: 20,
      color: 'white',
      backgroundColor: '#3c3c44',
      padding: 10,
      borderRadius: 5,
      textAlign: 'center',
      marginBottom: 15,
    },
    temp: {
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
    },
    currentTempSubContainer: {
      paddingRight: 40,
    }
  });
  