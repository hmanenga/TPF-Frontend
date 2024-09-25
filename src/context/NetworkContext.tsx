import React, { useCallback, useState, createContext, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
// Uncomment if you want to use the hasNotch function
// import { hasNotch } from 'react-native-device-info';

interface NetworkPros {
  hasInternet: boolean;
}

const NetworkContext = createContext<NetworkPros>({} as NetworkPros);

export const useNetwork = () => {
  return useContext(NetworkContext);
}

export const NetworkProvider = ({children}) =>{
  const [hasInternet, setHasInternet] = useState(true);

  useFocusEffect(
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
  
  return (
    <NetworkContext.Provider value={{ hasInternet }}>
      {children}
    </NetworkContext.Provider>
  );
}


 



