import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    futureForecastItemContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        padding: 20,
        marginLeft: 10
    },
  itemImage: {
    width: 100,
    height: 100,
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 10,
    borderRadius: 50,
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    color: '#eee'
  }
});
