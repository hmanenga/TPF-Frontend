import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import useFetchWeatherData from '../../../hooks/useFetchWeatherData';
import moment from 'moment-timezone';
import { Load } from '../../Load/Load';
import { formateText } from '../../../utils/helpers';
import { useNetwork } from '../../../context/NetworkContext';


interface WeatherItemProps {
  title: string;
  value: number | string;
  unit: string;
}

const WeatherItem = ({title, value, unit}: WeatherItemProps) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const {data, latitude, longitude} = useFetchWeatherData();
  const {hasInternet} = useNetwork();

  if (!data) {
    return <Load size="medium" />;
  }

  const current = data?.current;
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{current ? moment.tz(current.dt  * 1000,data.timezone).format('HH:mm'): ""}</Text>
        </View>

        <View>
          <Text style={styles.subHeading}>{current ? moment.tz(current.tz, data.timezone).format('dddd, MMMM D'): ""}</Text>
        </View>

        <View style={styles.weatherItemContainer}>
          <WeatherItem
            title="Humidity"
            value={current ? current.humidity : ''}
            unit="%"
          />
          <WeatherItem
            title="Pressure"
            value={current ? current.pressure : ''}
            unit="hpA"
          />
          <WeatherItem
            title="Sunrise"
            value={
              current
                ? moment
                    .tz(current.sunrise * 1000, data?.timezone)
                    .format('HH:mm')
                : ''
            }
            unit="am"
          />
          <WeatherItem
            title="Sunset"
            value={
              current
                ? moment
                    .tz(current.sunset * 1000, data?.timezone)
                    .format('HH:mm')
                : ''
            }
            unit="am"
          />
        </View>
      </View>

      <View style={styles.rightAlign}>
        <Text style={styles.timezone}>{formateText(data?.timezone,13)}</Text>
        <Text style={styles.latlong}>
          {latitude.toFixed(2)}N {longitude.toFixed(2)}E
        </Text>
      </View>
    </View>
  );
};

export default DateTime;
