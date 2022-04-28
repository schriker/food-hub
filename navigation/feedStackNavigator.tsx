import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LogoTitle from '../components/LogoTitle/LogoTitle';
import Colors from '../constants/Colors';
import FeedScreen from '../screens/FeedScreen';
import RecipeScreen from '../screens/RecipeScreen';
import { FeedStackParamList } from './types';

const Stack = createNativeStackNavigator<FeedStackParamList>();

export default function FeedStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins_400Regular',
          color: Colors.black,
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={FeedScreen}
        options={{
          headerTitleAlign: 'left',
          headerTitle: () => <LogoTitle />,
        }}
      ></Stack.Screen>
      <Stack.Screen name="Recipe" component={RecipeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
