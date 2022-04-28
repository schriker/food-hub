import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useAppSelector } from '../hooks/useAppSelector';
import { RecipeScreenRouteProp } from '../navigation/types';
import { getRecipeById } from '../store/slices/recipesSlice';

export default function RecipeScreen() {
  const route = useRoute<RecipeScreenRouteProp>();
  const recipe = useAppSelector((state) =>
    getRecipeById(state, route.params.id)
  );

  return (
    <View>
      <Text>{recipe?.name}</Text>
    </View>
  );
}
