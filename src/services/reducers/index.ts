import { combineReducers } from 'redux';

import loadIngredients from './load-ingredients';
import interfaceBurger from './interface';
import constructor from './constructor-burger';
import sendOrder from './send-order';

export * from './load-ingredients';
export * from './interface';
export * from './constructor-burger';
export * from './send-order';

export const rootReducer = combineReducers({
  loadIngredients: loadIngredients.reducer,
  interface: interfaceBurger.reducer,
  constructorBurger: constructor.reducer,
  sendOrder: sendOrder.reducer
});
export type RootState = ReturnType<typeof rootReducer>;
