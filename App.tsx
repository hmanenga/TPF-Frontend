// App.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigators/stacks/StackNavigator';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}