import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadAllCards } from '../../utils/fetch';
const initialState = {
  ingredients: [], // список ингридиентов
  isLoadedIngredientsRequest: false, // процесс загрузки ингридиентов
  isLoadedIngredientsFailed: false, // ошибка загрузки ингридиентов
  preloader: false // прелоадер
};

export const getIngredients = createAsyncThunk(
  'loadIngredients/getIngredients',
  async () => {
    const response = await loadAllCards();
    return response;
  }
);

const loadIngredients = createSlice({
  name: 'loadIngredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoadedIngredientsRequest = true;
        state.isLoadedIngredientsFailed = false;
        state.preloader = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload.data;
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
