import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
});
export type AppDispatch = typeof store.dispatch;
