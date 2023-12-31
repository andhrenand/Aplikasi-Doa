import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen3 from './pages/Screen2';
import DoaScreen from './pages/DoaScreen';
import DetailDoa from './pages/DetailDoa'
import Motivate from './pages/Motivate';


const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Main Menu' }} />
      <Stack.Screen name="Motivate" component={Motivate} options={{ title: ' ' }} />
      <Stack.Screen name="KumpulanDoa" component={DoaScreen} options={{ title: ' ' }} />
      <Stack.Screen name="Detail DOA" component={DetailDoa} options={{ title: ' ' }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
