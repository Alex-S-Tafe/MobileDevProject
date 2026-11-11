import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EventDetailsScreen from './screens/EventDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen'
import SettingsScreen from './screens/SettingsScreen';

import { LoadData } from './DataHandler';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="EventDetailsScreen" component={EventDetailsScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  LoadData();
  

  return (

    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen  name="Home" component={HomeStack}/>
          <Tab.Screen name="Events" component={EventsScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
