import { combineReducers } from 'redux';

import loadIngredients from './load-ingredients';
import interfaceBurger from './interface';
import constructor from './constructor-burger';
import sendOrder from './send-order';
import auth from './auth';
import wsFeeds from './ws-feed';
import wsOrders from './ws-orders';

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
  auth: auth.reducer,
  wsFeeds: wsFeeds.reducer,
  wsOrders: wsOrders.reducer
});
export type RootState = ReturnType<typeof rootReducer>;
