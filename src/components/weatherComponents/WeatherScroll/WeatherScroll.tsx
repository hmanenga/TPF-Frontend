import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import FutureForecast from '../FutureForecast/FutureForecast';
import { styles } from './styles';
import useFetchWeatherData from '../../../hooks/useFetchWeatherData';
import moment from 'moment-timezone';
import { Load } from '../../Load/Load';

const WeatherScroll = () => {  
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempElement />
      <FutureForecast/>
    </ScrollView>
  );
};

const CurrentTempElement = () => {
  const {data} =useFetchWeatherData();

  if(!data){
    return <Load  size='medium'/>
  }

  const weatherData =data?.daily[0];
 
  if(data && weatherData.weather){
    const img ={uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`};
    return (
      <View style={styles.currentTempContainer}>
        <Image
          style={styles.image}
          source={img}
        />
        <View style={styles.currentTempSubContainer}>
          <Text style={styles.day}>{moment(weatherData.dt * 1000).format('dddd')}</Text>
          <Text style={styles.temp}>Night-{weatherData.temp.night}</Text>
          <Text style={styles.temp}>Day-{weatherData.temp.day}</Text>
        </View>
      </View>
    );
  }else {
    return (<View></View>)
  }
 
};

export default WeatherScroll;

