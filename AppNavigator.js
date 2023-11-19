// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/ProfileScreen';

// Import halaman-halaman yang akan ditampilkan di bottom navigation bar


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={Screen2} />
      <Tab.Screen name="ProfileScreen" component={Screen3} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
