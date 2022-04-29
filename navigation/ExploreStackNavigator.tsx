import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from '../screens/CategoryScreen';
import ExploreScreen from '../screens/ExploreScreen';
import RecipeScreen from '../screens/RecipeScreen';
import { ExploreStackParamList } from './types';

const Stack = createNativeStackNavigator<ExploreStackParamList>();
const CategoryStack = createNativeStackNavigator();

function CategoryStackNavigator() {
  return (
    <CategoryStack.Navigator initialRouteName="Category">
      <Stack.Screen name="Category" component={CategoryScreen}></Stack.Screen>
      <Stack.Screen
        name="ExploreRecipe"
        component={RecipeScreen}
      ></Stack.Screen>
    </CategoryStack.Navigator>
  );
}

export default function ExploreStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={ExploreScreen}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="CategoryModal"
        component={CategoryStackNavigator}
        options={{ presentation: 'modal', headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
