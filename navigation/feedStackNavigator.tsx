import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import RecipeScreen from '../screens/RecipeScreen';
import { FeedStackParamList } from './types';

const Stack = createNativeStackNavigator<FeedStackParamList>();

export default function FeedStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="Recipe" component={RecipeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
