import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import useFetchWeatherData from '../../../hooks/useFetchWeatherData';
import moment from 'moment-timezone';
import { Load } from '../../Load/Load';

const FutureForecast = () => {
  const {data} = useFetchWeatherData();

  if (!data) {
    return <Load size="medium" />;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {data && data.daily.length > 0
        ? data.daily.map((forecastItem:any, index: number) =>( index !=0  && <FutureForecastItem key={forecastItem.dt} forecastItem={forecastItem} />))
        : <View/>}
    </View>
  );
};

const FutureForecastItem = (forecastItem: any) => {
  const weatherData = forecastItem?.forecastItem;
  const img ={uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`};
   if(!weatherData){
    return <Load size='medium'/>
   }
   
   return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>{moment(weatherData.dt * 1000).format('ddd')}</Text>
      <Image
        style={styles.itemImage}
        source={img}
      />
      <Text style={styles.text}>Night-{weatherData.temp?.night}</Text>
      <Text style={styles.text}>Day-{weatherData.temp?.day}</Text>
    </View>
  );
};
export default FutureForecast;
