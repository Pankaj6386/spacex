import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './stackNavigation';
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
