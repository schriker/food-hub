import { Feather } from '@expo/vector-icons';
import { RouteConfigComponent } from '@react-navigation/native';
import React, { ComponentType } from 'react';
import { RootTabParamList } from '../navigation/types';

export type RootTab = {
  name: keyof RootTabParamList;
  component: () => JSX.Element;
  icon: React.ComponentProps<typeof Feather>['name'];
};
