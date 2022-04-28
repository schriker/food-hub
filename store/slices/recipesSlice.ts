import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from '../../data/categories';
import { recipes } from '../../data/recipes';
import { RecipesState } from '../../types/store/recipesSlice';
import { RootState } from '../store';

const initialState: RecipesState = {
  data: recipes,
  categories: categories,
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const getRecipeById = (state: RootState, recipeId: number) =>
  state.recipes.data.find((recipe) => recipe.id === recipeId);

export const getCategoryById = (state: RootState, categoryId: number) =>
  state.recipes.categories.find((category) => category.id === categoryId);

export default recipesSlice.reducer;
