import {Children, createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthPros {
  authState?: {token: string | null; authenticated: boolean | null};
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthPros>({} as AuthPros);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjcwMzA2MzN9.4NEBHUJVfnbbZUJ94v9BvMcU3P30UfCzrYTVZRvp4Q0',
    authenticated: true,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem(`${process.env.TOKEN_KEY}`);
      console.log('JWT TOKEN FETCHED FROM ASYNC STORAGE', token);
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({token, authenticated: true});
      }
    };

    loadToken();
  }, []);

  const register = async (email: string, password: string) => {
    try {
      return axios.post(`${process.env.API_HOST}/users`, {email, password});
    } catch (e) {
      return {error: true, msg: (e as any).response.data.msg};
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${process.env.API_HOST}/auth`, {email, password});
      console.log('-----AuthContext---Login---Result: ' + result);
      setAuthState({
        token: result.data.token,
        authenticated: true,
      });
      //Insert the token into the session for future requests
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;

      //Store the token in local storage
      AsyncStorage.setItem(`${process.env.TOKEN_KEY}`, result.data.token);

      return result;
    } catch (e) {
      return {error: true, msg: (e as any).response.data.msg};
    }
  };
  const logout = async () => {
    //Delete the token from local storage
    localStorage.removeItem(`${process.env.TOKEN_KEY}`);

    //Delete the token from the axios defaults headers
    axios.defaults.headers.common['Authorization'] = '';

    //reset auth state
    setAuthState({token: null, authenticated: false});
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
