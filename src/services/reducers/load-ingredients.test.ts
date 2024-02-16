import loadIngredients, { getIngredients } from './load-ingredients';
import { Ingredient, LoadIngredientsState } from '../../utils/types';
import preloader from './load-ingredients';

const { enableLoader, disableLoader } = preloader.actions;

const initialState: LoadIngredientsState = {
  ingredients: [],
  isLoadedIngredientsRequest: false,
  isLoadedIngredientsFailed: false,
  preloader: false
};
const ingredient: Ingredient = {
  _id: '643d69a5c3f7b9001cfa0941',
  name: 'Биокотлета из марсианской Магнолии',
  type: 'main',
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: 'https://code.s3.yandex.net/react/code/meat-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
  __v: 0
};
describe('loadIngredients reducer', () => {
  it('should handle enableLoader', () => {
    const nextState = loadIngredients.reducer(initialState, enableLoader());
    expect(nextState.preloader).toEqual(true);
  });

  it('should handle disableLoader', () => {
    const nextState = loadIngredients.reducer(initialState, disableLoader());
    expect(nextState.preloader).toEqual(false);
  });

  it('should handle getIngredients.pending and show preloader', () => {
    const nextState = loadIngredients.reducer(
      initialState,
      getIngredients.pending
    );
    expect(nextState.isLoadedIngredientsRequest).toBe(true);
    expect(nextState.isLoadedIngredientsFailed).toBe(false);
    expect(nextState.preloader).toBe(true);
  });

  it('should handle getIngredients.fulfilled and update ingredients state', () => {
    const mockIngredientData = [ingredient];
    const nextState = loadIngredients.reducer(
      initialState,
      //@ts-ignore
      getIngredients.fulfilled(mockIngredientData)
    );
    expect(nextState.ingredients).toEqual(mockIngredientData);
    expect(nextState.isLoadedIngredientsRequest).toBe(false);
    expect(nextState.preloader).toBe(false);
  });

  it('should handle getIngredients.rejected and show failed state without preloader', () => {
    const nextState = loadIngredients.reducer(
      initialState,
      //@ts-ignore
      getIngredients.rejected()
    );
    expect(nextState.isLoadedIngredientsRequest).toBe(false);
    expect(nextState.isLoadedIngredientsFailed).toBe(true);
    expect(nextState.preloader).toBe(false);
  });
});
