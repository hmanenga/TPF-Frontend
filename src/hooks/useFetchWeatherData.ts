import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
import axios from 'axios';

const useFetchWeatherData = () => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [latitude, setLatitude] = useState(38.736946);
  const [longitude, setLongitude] = useState(-9.142685);

  useEffect(() => {
    const fetchDataFromAPI = async () => {      
      fetch(`${process.env.WEATHER_API_BASE_URL}${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${process.env.WEATHER_API_KEY}`)
       .then(response => response.json())
       .then(data =>{
        setData(data);        
       })
    };

    Geolocation.getCurrentPosition(
      pos => {
        setLatitude( pos.coords.latitude);
        setLongitude( pos.coords.longitude);
        fetchDataFromAPI();
      },
      error => {
        Alert.alert('GetCurrentPosition Error', JSON.stringify(error));
        // Fetch data for Lisbon City as fallback
        fetchDataFromAPI();
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return { data, error,latitude,longitude};
};

export default useFetchWeatherData;
