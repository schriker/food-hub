import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import Colors from '../constants/Colors';
import BookmarksScreen from '../screens/BookmarksScreen';
import ExploreScreen from '../screens/ExploreScreen';
import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';
import { RootTab } from '../types/rootTab';
import { RootTabParamList } from './types';

const ROOT_TABS: RootTab[] = [
  {
    name: 'Feed',
    component: FeedScreen,
    icon: 'menu',
  },
  {
    name: 'Explore',
    component: ExploreScreen,
    icon: 'grid',
  },
  {
    name: 'Search',
    component: SearchScreen,
    icon: 'search',
  },
  {
    name: 'Bookmarks',
    component: BookmarksScreen,
    icon: 'bookmark',
  },
  {
    name: 'User',
    component: UserScreen,
    icon: 'user',
  },
];

const TabNavigator = createBottomTabNavigator<RootTabParamList>();

export default function RootTabNavigator() {
  return (
    <TabNavigator.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: Colors.main,
        tabBarInactiveTintColor: Colors.black,
        tabBarLabelStyle: {
          fontFamily: 'Poppins_400Regular',
        },
      }}
    >
      {ROOT_TABS.map((tab, index) => (
        <TabNavigator.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={tab.icon} color={color} />
            ),
          }}
        />
      ))}
    </TabNavigator.Navigator>
  );
}
