import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from '../../data/categories';
import { recipes } from '../../data/recipes';
import { RecipesState } from '../../types/store/recipesSlice';
import { RootState } from '../store';

const initialState: RecipesState = {
  data: recipes,
  categories: categories,
  bookmarked: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addToBookmars: (state, action: PayloadAction<number>) => {
      state.bookmarked.push(action.payload);
    },
    removeFromBookmarks: (state, action: PayloadAction<number>) => {
      state.bookmarked = state.bookmarked.filter((id) => id !== action.payload);
    },
  },
});

export const { addToBookmars, removeFromBookmarks } = recipesSlice.actions;

export const getRecipeById = (state: RootState, recipeId: number) =>
  state.recipes.data.find((recipe) => recipe.id === recipeId);

export const getCategoryById = (state: RootState, categoryId: number) =>
  state.recipes.categories.find((category) => category.id === categoryId);

export const isBookmarked = (state: RootState, recipeId: number) =>
  state.recipes.bookmarked.some((id) => id === recipeId);

export const getRecipesByCategoryId = (state: RootState, categoryId: number) =>
  state.recipes.data.filter((recipe) => recipe.categoryId === categoryId);

export const getBookmarks = (state: RootState) =>
  state.recipes.data.filter((recipe) =>
    state.recipes.bookmarked.includes(recipe.id)
  );

export default recipesSlice.reducer;
