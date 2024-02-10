import constructorBurgerSlice from './constructor-burger';
import { Ingredient } from '../../utils/types';
import {
  addIngredient,
  clearCart,
  deleteIngredient,
  sortCart
} from '../actions';
const initialBun: Ingredient = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  __v: 0
};
const initialMainIngredient: Ingredient = {
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
describe('constructorBurgerSlice reducer', () => {
  const initialState = {
    cart: { bun: initialBun, main: [initialMainIngredient] }
  };

  it('should handle addIngredient for bun', () => {
    const nextState = constructorBurgerSlice.reducer(
      initialState,
      addIngredient(initialBun)
    );
    expect(nextState.cart.bun).toEqual(initialBun);
  });

  it('should handle deleteIngredient', () => {
    const ingredientUidToDelete = initialState.cart.main[0].uid;
    const nextState = constructorBurgerSlice.reducer(
      initialState,
      deleteIngredient(ingredientUidToDelete)
    );
    expect(nextState.cart.main).toHaveLength(0);
  });

  it('should handle sortCart', () => {
    const dragIndex = 0;
    const hoverIndex = 1;
    const dragItem = initialState.cart.main[dragIndex];
    const prevState = constructorBurgerSlice.reducer(
      initialState,
      sortCart({ hoverIndex, dragIndex })
    );
    expect(prevState.cart.main[hoverIndex]).toEqual(dragItem);
  });

  it('should handle clearCart', () => {
    const nextState = constructorBurgerSlice.reducer(
      initialState,
      clearCart(initialState)
    );
    expect(nextState.cart.bun).toBeUndefined();
    expect(nextState.cart.main).toHaveLength(0);
  });
});
