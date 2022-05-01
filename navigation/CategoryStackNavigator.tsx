import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BookmarkButton from '../components/BookmarkButton/BookmarkButton';
import Colors from '../constants/Colors';
import CategoryScreen from '../screens/CategoryScreen';
import RecipeScreen from '../screens/RecipeScreen';
import { CategoryStackParamList } from './types';

const CategoryStack = createNativeStackNavigator<CategoryStackParamList>();

export default function CategoryStackNavigator() {
  return (
    <CategoryStack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins_400Regular',
          color: Colors.black,
        },
      }}
    >
      <CategoryStack.Screen
        name="Category"
        component={CategoryScreen}
      ></CategoryStack.Screen>
      <CategoryStack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{
          headerRight: () => <BookmarkButton />,
        }}
      ></CategoryStack.Screen>
    </CategoryStack.Navigator>
  );
}
