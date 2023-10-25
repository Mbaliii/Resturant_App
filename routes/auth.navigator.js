import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, LoginScreen, RegisterScreen } from '../screens';
import Booking from '../screens/Booking';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Main" component={MainScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
