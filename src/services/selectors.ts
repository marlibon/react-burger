import { RootState } from './reducers';

export const getStateLoadIngredients = (store: RootState) =>
  store.loadIngredients;
export const getStateInterface = (store: RootState) => store.interface;
export const getStateOrder = (store: RootState) => store.constructorBurger;
export const getStateSendOrder = (store: RootState) => store.sendOrder;
export const getStateAuth = (store: RootState) => store.auth;
export const getStateFeeds = (store: RootState) => store.wsFeeds;
export const getStateOrders = (store: RootState) => store.wsOrders;
