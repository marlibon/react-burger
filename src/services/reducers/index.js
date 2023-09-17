import { combineReducers } from 'redux';
import burgerReducer from './burger';

export const rootReducer = combineReducers({
  burger: burgerReducer
});
