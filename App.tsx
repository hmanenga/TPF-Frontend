// App.tsx

import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {AuthProvider} from './src/context/AuthContext';
import NavigationLayout from './src/navigators/stacks/NavigationLayout';

export default function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationLayout />
      </Provider>
    </AuthProvider>
  );
}
