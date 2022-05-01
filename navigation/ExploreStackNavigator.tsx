import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import ExploreScreen from '../screens/ExploreScreen';
import CategoryStackNavigator from './CategoryStackNavigator';
import { ExploreStackParamList } from './types';

const Stack = createNativeStackNavigator<ExploreStackParamList>();

export default function ExploreStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins_400Regular',
          color: Colors.black,
        },
      }}
    >
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
