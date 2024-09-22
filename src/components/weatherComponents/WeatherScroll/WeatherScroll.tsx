import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import FutureForecast from '../FutureForecast/FutureForecast';

const WeatherScroll = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempElement />
      <FutureForecast/>
    </ScrollView>
  );
};

const CurrentTempElement = () => {
  return (
    <View style={styles.currentTempContainer}>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/weatherCloud.png')}
      />
      <View style={styles.currentTempSubContainer}>
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.temp}>High-28</Text>
        <Text style={styles.temp}>day-35&u176;</Text>
      </View>
    </View>
  );
};

export default WeatherScroll;

const styles = StyleSheet.create({
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
    fontWeight: '200',
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
