import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import Colors from '../constants/Colors';
import BookmarksScreen from '../screens/BookmarksScreen';
import AddScreen from '../screens/AddScreen';
import { RootTab } from '../types/rootTab';
import ExploreStackNavigator from './ExploreStackNavigator';
import FeedStackNavigator from './FeedStackNavigator';
import { RootTabParamList } from './types';

const ROOT_TABS: RootTab[] = [
  {
    name: 'Feed',
    component: FeedStackNavigator,
    icon: 'menu',
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Explore',
    component: ExploreStackNavigator,
    icon: 'grid',
  },
  {
    name: 'Add',
    component: AddScreen,
    icon: 'plus-circle',
  },
  {
    name: 'Bookmarks',
    component: BookmarksScreen,
    icon: 'bookmark',
  },
];

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: Colors.main,
        tabBarInactiveTintColor: Colors.black,
        headerTitleStyle: {
          fontFamily: 'Poppins_400Regular',
          color: Colors.black,
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins_400Regular',
        },
        headerStyle: {
          shadowOpacity: 0,
        },
        tabBarStyle: {
          position: 'absolute',
          margin: 35,
          borderRadius: 10,
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 60,
          elevation: 0,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
        },
        tabBarShowLabel: false,
      }}
    >
      {ROOT_TABS.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            ...tab.options,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={tab.icon} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
