import { combineReducers } from 'redux';

import loadIngredients from './load-ingredients';
import interfaceBurger from './interface';
import constructor from './constructor-burger';
import sendOrder from './send-order';
import auth from './auth';

export * from './load-ingredients';
export * from './interface';
export * from './constructor-burger';
export * from './send-order';
export * from './auth';

export const rootReducer = combineReducers({
  loadIngredients: loadIngredients.reducer,
  interface: interfaceBurger.reducer,
  constructorBurger: constructor.reducer,
  sendOrder: sendOrder.reducer,
  auth: auth.reducer
});
export type RootState = ReturnType<typeof rootReducer>;
