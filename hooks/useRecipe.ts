import { useRoute } from '@react-navigation/native';
import { RecipeScreenRouteProp } from '../navigation/types';
import { getRecipeById } from '../store/slices/recipesSlice';
import { useAppSelector } from './useAppSelector';

export default function useRecipe() {
  const route = useRoute<RecipeScreenRouteProp>();
  const recipe = useAppSelector((state) =>
    getRecipeById(state, route.params.id)
  );

  return recipe;
}
