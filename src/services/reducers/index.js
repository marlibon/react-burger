import { combineReducers } from 'redux'
import ingredientsReducer from './burger-ingredients'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer
})