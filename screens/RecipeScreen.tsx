import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { RecipeScreenRouteProp } from '../navigation/types';

export default function RecipeScreen() {
  const route = useRoute<RecipeScreenRouteProp>();

  console.log(route);

  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
}
