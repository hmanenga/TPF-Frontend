import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthPros {
  authState?: {token: string | null;email: string; authenticated: boolean | null};
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthPros>({} as AuthPros);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    email: string,
    authenticated: boolean | null;
  }>({
    token: '',
    email: '',
    authenticated: false,
  });

  useEffect(() => {
    const loadToken = async () => {
      // Retreive the credentials
      const credentials = await Keychain.getGenericPassword();

      //Retrieve theemail address
      const email= await AsyncStorage.getItem('email');

      if (credentials) {
        const token = credentials.password;

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({token, email: email as string,authenticated: true});
      }
    };

    loadToken();
  }, []);

  const register = async (email: string, password: string) => {
    try {
      return axios.post(`${process.env.API_HOST}/users`, {email, password});
    } catch (e) {
      console.warn('Fail trying to register user');
      console.log(e);
      return {error: true, msg: (e as any).response.data.msg};
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${process.env.API_HOST}/auth`, {
        email,
        password,
      });
      setAuthState({
        token: result.data.token,
        email,
        authenticated: true,
      });
      //Insert the token into the session for future requests
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;

      //Store the token in local storage
      await Keychain.setGenericPassword(
        `${process.env.TOKEN_KEY}`,
        result.data.token,
      );

      //Store the email address in local storage
      await AsyncStorage.setItem('email', email);

      return result;
    } catch (e) {
      return {error: true, msg: (e as any).response.data.msg};
    }
  };
  const logout = async () => {
    //Delete the token from local storage
    await Keychain.resetGenericPassword();

    //Delete the token from the axios defaults headers
    axios.defaults.headers.common['Authorization'] = '';

    //reset auth state
    setAuthState({token: null,email: '', authenticated: false});
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};