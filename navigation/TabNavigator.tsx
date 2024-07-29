import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from '../components/screens/Landing'; // Your home screen component
import MoreInfoScreen from '../components/screens/MoreInfo'; // Your more info screen component
import {Colors} from '../constants/Colors'; // Import your color constants

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopWidth: 0, // Remove the top border
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Image
              source={require('../assets/images/home-icon.png')} // Use require for static assets
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MoreInfo"
        component={MoreInfoScreen}
        options={{
          title: 'More Info',
          tabBarIcon: ({color, focused}) => (
            <Image
              source={require('../assets/images/gnus-icon-white.png')} // Use require for static assets
              style={{
                width: 24,
                height: 28,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
