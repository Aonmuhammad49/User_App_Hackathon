import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';

// Screens
import HomeScreen from '../Components/Homepage';
import BookAppointmentScreen from '../Components/BookAppointment';
import RequestHelpScreen from '../Components/RequestHelp';
import MyRequestsScreen from '../Components/MyRequests';
import ProfileScreen from '../Components/Profile';
import SettingsScreen from '../Components/Settings';

const Tab = createBottomTabNavigator();

const Label = ({ title, focused }) => (
  <View style={styles.labelWrapper}>
    <Text style={[styles.labelText, focused && styles.labelTextFocused]}>
      {title}
    </Text>
    {focused && <View style={styles.activeIndicator} />}
  </View>
);

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => null, // No icons as per request
        tabBarLabel: ({ focused }) => {
          const labelMap = {
            Home: 'Home',
            BookAppointment: 'Appoint',
            RequestHelp: 'Help',
            MyRequests: 'Requests',
            Profile: 'Profile',
            Settings: 'Settings',
          };
          return <Label title={labelMap[route.name] || 'Tab'} focused={focused} />;
        },
        tabBarStyle: styles.tabBar,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="BookAppointment" component={BookAppointmentScreen} />
      <Tab.Screen name="RequestHelp" component={RequestHelpScreen} />
      <Tab.Screen name="MyRequests" component={MyRequestsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    height: 60, // Reduced height for sleeker look
    paddingBottom: 4, // Adjusted to pull text up
    paddingTop: 4,
    borderTopWidth: 0.5, // Thinner border for subtlety
    borderTopColor: '#e0e0e0',
    elevation: 10, // Slightly higher for better shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  labelWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2, // Reduced to pull text up
  },
  labelText: {
    fontSize: 12, // Slightly smaller for balance
    fontWeight: '600',
    color: '#666', // Softer gray for inactive state
    textAlign: 'center',
  },
  labelTextFocused: {
    color: '#1e40af', // Slightly darker blue for vibrancy
    fontWeight: '700',
    fontSize: 13, // Slightly larger for active state
  },
  activeIndicator: {
    marginTop: 2, // Tighter spacing
    width: 24, // Slightly wider for balance
    height: 2.5, // Thinner for elegance
    borderRadius: 1.5,
    backgroundColor: '#1e40af',
  },
});

export default BottomTabNavigation;