import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TabBarIconProps } from '../../types/tabBarIcon';

export default function TabBarIcon(props: TabBarIconProps) {
  return <Feather size={20} style={{ marginBottom: -3 }} {...props} />;
}
