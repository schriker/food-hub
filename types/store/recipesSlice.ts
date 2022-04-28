import { Category } from '../category';
import { Recipe } from '../recipe';

export interface RecipesState {
  data: Recipe[];
  categories: Category[];
  bookmarked: number[];
}
