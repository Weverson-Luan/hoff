import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//screen stacks
import {StackNavigation} from './routes.stack';

export function AppRoutes() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const handleUserToken = async () => {
      if (!token) {
        const data = await AsyncStorage.getItem('@login_user');
        const isLogged = JSON.parse(data as string);
        setToken(isLogged?.token);
      } else {
        setToken('');
      }
    };
    handleUserToken();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigation isLogged={!!token} />
    </NavigationContainer>
  );
}
