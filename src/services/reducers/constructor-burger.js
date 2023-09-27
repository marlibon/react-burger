import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = {
  cart: { bun: null, main: [] } // массив с ингридиентами в корзине из конструктора берется
};

const constructorBurgerSlice = createSlice({
  name: 'constructorBurger',
  initialState,
  reducers: {
    // добавить ингридиент
    addIngredient: {
      reducer(state, action) {
        const { payload } = action;
        if (payload.type === 'bun') {
          state.cart.bun = payload;
        } else {
          state.cart.main.push(payload);
        }
      },
      prepare({ ingredient }) {
        const uid = nanoid();
        return {
          payload: { ...ingredient, uid }
        };
      }
    },
    // удалить ингридиент
    deleteIngredient(state, action) {
      const index = state.cart.main.findIndex(
        (item) => item.uid === action.payload
      );
      state.cart.main.splice(index, 1);
    },
    sortCart(state, action) {
      const { hoverIndex, dragIndex } = action.payload;
      const dragItem = state.cart.main[dragIndex];
      if (dragItem) {
        const prevItem = state.cart.main.splice(hoverIndex, 1, dragItem);
        state.cart.main.splice(dragIndex, 1, prevItem[0]);
      }
    },
    // очистить корзину
    clearCart(state) {
      state.cart = initialState.cart;
    }
  }
});

export default constructorBurgerSlice;
