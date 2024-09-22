import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const FutureForecast = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
    </View>
  );
};

const FutureForecastItem = () => {
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>Mon</Text>
      <Image
        style={styles.itemImage}
        source={require('../../../../assets/images/weatherCloud.png')}
      />
      <Text style={styles.text}>Night-26&#176;C</Text>
      <Text style={styles.text}>Day-36&#176;C</Text>
    </View>
  );
};
export default FutureForecast;

const styles = StyleSheet.create({
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
