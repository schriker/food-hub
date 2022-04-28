import { Feather } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { RootTabParamList } from '../navigation/types';

export type RootTab = {
  name: keyof RootTabParamList;
  component: () => JSX.Element;
  icon: React.ComponentProps<typeof Feather>['name'];
  options?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<RootTabParamList, keyof RootTabParamList>;
        navigation: any;
      }) => BottomTabNavigationOptions)
    | undefined;
};
