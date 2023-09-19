import loadIngredients from '../reducers/load-ingredients';

export const {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
  enableLoader,
  disableLoader
} = loadIngredients.actions; // экшены
