import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RecipesState {
  data: [];
}

const initialState: RecipesState = {
  data: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default recipesSlice.reducer;
