import React from 'react';
import FirstScreen from '../../screens/pages/firstScreen';
import SecondScreen from '../../screens/pages/secondScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from '../bottomNavigation';
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="secondscreen" component={SecondScreen} />
    </Stack.Navigator>
  );
}
