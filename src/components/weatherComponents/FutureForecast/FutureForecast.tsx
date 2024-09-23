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
  console.log('WEATHER DATA FOR NEXT 7 DAYS',data.daily);
  return (
    <View style={{flexDirection: 'row'}}>
      {data && data.daily.length > 0
        ? data.daily.map((forecastItem:any, index: number) =>( <FutureForecastItem key={forecastItem.dt} forecastItem={forecastItem} />))
        : <View/>}
    </View>
  );
};

const FutureForecastItem = (forecastItem: any) => {
    //const img ={uri: `http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`};
   // const img ={uri: `http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`}
   if(!forecastItem){
    return <Load size='medium'/>
   }
  
   return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>{moment(forecastItem.dt).format('ddd')}</Text>
      <Image
        style={styles.itemImage}
        source={require('../../../../assets/images/weatherCloud.png')}
      />
      <Text style={styles.text}>Night-{forecastItem.temp?.night}</Text>
      <Text style={styles.text}>Day-{forecastItem.temp?.day}</Text>
    </View>
  );
};
export default FutureForecast;
