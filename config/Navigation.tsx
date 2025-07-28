import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={BottomTabNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;