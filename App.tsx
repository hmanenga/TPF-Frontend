// App.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigators/stacks/StackNavigator';
import {store} from './redux/store';
import {Provider} from 'react-redux';

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
