import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import Person from './screens/Person';
import SearchScreen from './screens/SearchScreen';


const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={HomeScreen} name='Home' options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen component={MovieScreen} name='Movie' options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen component={Person} name="Person" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen component={SearchScreen} name="Search" options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root