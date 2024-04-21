import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SearchOptionsScreen from './SearchOptionsScreen';
import MonitorScreen from './MonitorScreen'; 
import ImplementScreen from './ImplementScreen';
import SettingsScreen from './SettingsScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="SearchOptions" component={SearchOptionsScreen} />
        <Stack.Screen name="Monitor" component={MonitorScreen} />
        <Stack.Screen name="Implement" component={ImplementScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
