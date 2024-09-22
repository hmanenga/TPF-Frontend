import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {STANDARD_SPACING_SM} from '../../../config/constants';

interface WeatherItemProps {
  title: string;
  value: string;
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
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>12:30 am</Text>
        </View>

        <View>
          <Text style={styles.subHeading}>Monday, September 23</Text>
        </View>

        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Humidity" value="35" unit="%" />
          <WeatherItem title="Pressure" value="100" unit="hpA" />
          <WeatherItem title="sunrise" value="06:00" unit="am" />
        </View>
      </View>

      <View style={styles.rightAlign}>
        <Text style={styles.timezone}>Asia/Kalkata</Text>
        <Text style={styles.latlong}>4.22M 50$</Text>
      </View>
    </View>
  );
};

export default DateTime;

const styles = StyleSheet.create({
  container: {
    padding: 15, //STANDARD_SPACING_SM
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 45,
    fontWeight: '100',
  },
  subHeading: {
    fontSize: 25,
    fontWeight: '300',
  },
  rightAlign: {
    textAlign: 'right',
  },
  timezone: {
    fontSize: 20,
    color: 'black',
  },
  latlong: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  weatherItemContainer: {
    backgroundColor: '#18181b99',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weatherItemTitle: {
    color: '#eee',
    fontSize: 14,
  },

});
