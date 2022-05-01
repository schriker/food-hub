import { FieldError } from 'react-hook-form';
import { Ingredient } from './ingredient';

export type IngredientsFormProps = {
  ingredients: Ingredient[];
  error: FieldError | undefined | boolean;
  addIngredient: (ingredient: Ingredient) => void;
};
