import React, {
  useCallback,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
// Uncomment if you want to use the hasNotch function
// import { hasNotch } from 'react-native-device-info';

interface NetworkPros {
  hasInternet: boolean;
}

const NetworkContext = createContext<NetworkPros>({} as NetworkPros);

export const useNetwork = () => {
  return useContext(NetworkContext);
};

export const NetworkProvider = ({children}) => {
  const [hasInternet, setHasInternet] = useState(false);

  /*useFocusEffect(
    useCallback(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        setHasInternet(state.isConnected as boolean);
      });

      // Proper clean-up function: directly call the unsubscribe function
      return () => {
        unsubscribe(); // Call it directly, no `.remove()`
      };
    }, []),
  );
*/

  useEffect(() => {
    // Perform an initial fetch to get the current connection state when the app starts
    const fetchInitialNetInfo = async () => {
      const state = await NetInfo.fetch();

      setHasInternet(state.isConnected as boolean);
    };

    fetchInitialNetInfo(); // Ensure the initial state is fetched

    // Setup the listener for network changes
    const unsubscribe = NetInfo.addEventListener(state => {
      setHasInternet(state.isConnected as boolean);
    });

    // Proper clean-up function
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NetworkContext.Provider value={{hasInternet}}>
      {children}
    </NetworkContext.Provider>
  );
};
