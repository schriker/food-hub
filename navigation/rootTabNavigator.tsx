import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LogoTitle from '../components/LogoTitle/LogoTitle';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import Colors from '../constants/Colors';
import BookmarksScreen from '../screens/BookmarksScreen';
import ExploreScreen from '../screens/ExploreScreen';
import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';
import { RootTab } from '../types/rootTab';
import FeedStackNavigator from './feedStackNavigator';
import { RootTabParamList } from './types';

const ROOT_TABS: RootTab[] = [
  {
    name: 'Home',
    // component: FeedScreen,
    component: FeedStackNavigator,
    icon: 'menu',
    options: {
      headerTitle: () => <LogoTitle />,
      headerTitleAlign: 'left',
    },
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

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
