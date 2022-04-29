import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../hooks/useAppSelector';
import { RecipeScreenRouteProp } from '../navigation/types';
import { getRecipeById } from '../store/slices/recipesSlice';

export default function RecipeScreen() {
  const navigation = useNavigation();
  const route = useRoute<RecipeScreenRouteProp>();
  const recipe = useAppSelector((state) =>
    getRecipeById(state, route.params.id)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: recipe?.name,
    });
  }, [recipe]);

  return (
    <View>
      <Text>{recipe?.name}</Text>
    </View>
  );
}
