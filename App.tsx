// App.tsx

import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {AuthProvider} from './src/context/AuthContext';
import NavigationLayout from './src/navigators/stacks/NavigationLayout';
import {NetworkProvider} from './src/context/NetworkContext';

export default function App(): React.JSX.Element {
  return (
    <NetworkProvider>
      <AuthProvider>
        <Provider store={store}>
          <NavigationLayout />
        </Provider>
      </AuthProvider>
    </NetworkProvider>
  );
}
