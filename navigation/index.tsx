import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import RootTabNavigator from './RootTabNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootTabNavigator />
    </NavigationContainer>
  );
}
