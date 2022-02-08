import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/pages/home';
import Search from '../../screens/pages/search';
import Profile from '../../screens/pages/profile';
import {home, search, user} from '../../assets';
import DrawerNavigation from '../drawerNavigation/index';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigation}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!

            return (
              <Image
                source={home}
                style={{height: 18, width: 18, color: color}}
              />
            );
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'yellow',
          tabBarBadge: 3,
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return (
              <Image
                source={search}
                style={{height: 18, width: 18, color: color}}
              />
            );
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'yellow',
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return (
              <Image
                source={user}
                style={{height: 18, width: 18, color: color}}
              />
            );
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'yellow',
        })}
      />
    </Tab.Navigator>
  );
}
