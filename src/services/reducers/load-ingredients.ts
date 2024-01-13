import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadAllCards } from '../../utils/fetch';
import { Ingredient, LoadIngredientsState } from '../../utils/types';

const initialState: LoadIngredientsState = {
  ingredients: [],
  isLoadedIngredientsRequest: false,
  isLoadedIngredientsFailed: false,
  preloader: false
};

export const getIngredients = createAsyncThunk<Ingredient[]>(
  'loadIngredients/getIngredients',
  async () => {
    const response = await loadAllCards();
    return response.data;
  }
);

const loadIngredients = createSlice({
  name: 'loadIngredients',
  initialState,
  reducers: {
    enableLoader(state) {
      state.preloader = true;
    },
    disableLoader(state) {
      state.preloader = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoadedIngredientsRequest = true;
        state.isLoadedIngredientsFailed = false;
        state.preloader = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoadedIngredientsRequest = false;
        state.preloader = false;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.isLoadedIngredientsRequest = false;
        state.isLoadedIngredientsFailed = true;
        state.preloader = false;
      });
  }
});

export default loadIngredients;
