import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
import axios from 'axios';

const useFetchWeatherData = () => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const fetchDataFromAPI = async () => {      
      try {
        //console.log(`${process.env.WEATHER_API_BASE_URL}${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${process.env.WEATHER_API_KEY}`);
        const response = await axios.get(`${process.env.WEATHER_API_BASE_URL}${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${process.env.WEATHER_API_KEY}`);
        setData(response.data);
      } catch (err) {
          const errorMessage = (err as Error).message || 'Error fetching weather data';
          setError(errorMessage);
      }
    };

    Geolocation.getCurrentPosition(
      pos => {
        setLatitude( pos.coords.latitude);
        setLongitude( pos.coords.longitude);
        fetchDataFromAPI();
      },
      error => {
        Alert.alert('GetCurrentPosition Error', JSON.stringify(error));
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return { data, error,latitude,longitude};
};

export default useFetchWeatherData;
