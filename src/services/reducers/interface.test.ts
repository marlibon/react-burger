import interfaceBurger from './interface';
import { Ingredient, InitialStateInterface, TTab } from '../../utils/types';
import {
  switсhTab,
  openIngredientModal,
  closeIngredientModal,
  openOrderModal,
  openOrderModalError,
  closeOrderModal,
  closeOrderModalError
} from '../actions';
const initialState: InitialStateInterface = {
  currentTab: TTab.bun,
  ingredientForModal: {},
  isOpenIngredientModal: false,
  isOpenOrderModal: false,
  isOpenOrderErrorModal: false
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

describe('interfaceBurger reducer', () => {
  it('should handle switсhTab', () => {
    const nextState = interfaceBurger.reducer(
      initialState,
      switсhTab(TTab.bun)
    );
    expect(nextState.currentTab).toEqual(TTab.bun);
  });

  it('should handle openIngredientModal', () => {
    const nextState = interfaceBurger.reducer(
      initialState,
      openIngredientModal(ingredient)
    );
    expect(nextState.ingredientForModal).toEqual(ingredient);
    expect(nextState.isOpenIngredientModal).toEqual(true);
  });
  it('should handle closeIngredientModal', () => {
    const nextState = interfaceBurger.reducer(
      initialState,
      closeIngredientModal()
    );
    expect(nextState.ingredientForModal).toStrictEqual({});
    expect(nextState.isOpenIngredientModal).toEqual(false);
  });
  it('should handle openOrderModal', () => {
    const nextState = interfaceBurger.reducer(initialState, openOrderModal());
    expect(nextState.isOpenOrderModal).toEqual(true);
  });
  it('should handle closeOrderModal', () => {
    const nextState = interfaceBurger.reducer(initialState, closeOrderModal());
    expect(nextState.isOpenOrderModal).toEqual(false);
  });
  it('should handle openOrderModalError', () => {
    const nextState = interfaceBurger.reducer(
      initialState,
      openOrderModalError()
    );
    expect(nextState.isOpenOrderErrorModal).toEqual(true);
  });
  it('should handle closeOrderModalError', () => {
    const nextState = interfaceBurger.reducer(
      initialState,
      closeOrderModalError()
    );
    expect(nextState.isOpenOrderErrorModal).toEqual(false);
  });
});
