import React from 'react';
import { Text } from 'react-native';
import { TabBar as TabViewTabBar } from 'react-native-tab-view';
import Colors from '../../constants/Colors';
import { TabBarProps } from '../../types/tabBar';

export default function TabBar(props: TabBarProps) {
  return (
    <TabViewTabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.main }}
      style={{ backgroundColor: Colors.white }}
      renderLabel={({ route }) => (
        <Text style={{ color: Colors.black, fontFamily: 'Poppins_400Regular' }}>
          {route.title}
        </Text>
      )}
    />
  );
}
