import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../../context/AuthContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const NavigationLayout = () => {
  const {authState} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {authState?.authenticated ? (
          <Stack.Screen name="HomeStack" component={HomeStack}></Stack.Screen>
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationLayout;
