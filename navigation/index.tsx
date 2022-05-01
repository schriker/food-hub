import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import RootTabNavigator from './RootTabNavigator';
import { Host } from 'react-native-portalize';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Host>
        <RootTabNavigator />
      </Host>
    </NavigationContainer>
  );
}
