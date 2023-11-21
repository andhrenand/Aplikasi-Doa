// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import Motivate from './pages/Motivate';
import DaftarDoa from './pages/DoaScreen';
import DetailDoa from './pages/DetailDoa';


const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="The Incridible Of Doa" component={AppNavigator} />
      <Stack.Screen name="Motivate" component={Motivate} />
      <Stack.Screen name="Daftar Doa" component={DaftarDoa} />
      <Stack.Screen name="DetailDoa" component={DetailDoa} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
