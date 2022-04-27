import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from '../../data/categories';
import { recipes } from '../../data/recipes';
import { RecipesState } from '../../types/store/recipesSlice';

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

export default recipesSlice.reducer;
