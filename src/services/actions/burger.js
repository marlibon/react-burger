import { createOrder, loadAllCards } from '../../utils/fetch';
import {
  clearCart,
  getIngredientsFailed,
  getIngredientsRequest,
  getIngredientsSuccess,
  openOrderModal,
  openOrderModalError,
  sendOrderFailed,
  sendOrderRequest,
  sendOrderSuccess
} from '../reducers/burger';

export const getIngredients = () => {
  return async (dispatch) => {
    dispatch(getIngredientsRequest());
    try {
      const res = await loadAllCards();
      dispatch(getIngredientsSuccess(res.data));
    } catch (error) {
      dispatch(getIngredientsFailed());
      console.error(error);
    }
  };
};
export const sendOrder = (idList) => {
  return async (dispatch) => {
    dispatch(sendOrderRequest());
    try {
      const res = await createOrder({ ingredients: idList });
      dispatch(sendOrderSuccess(res));
      dispatch(openOrderModal());
      dispatch(clearCart());
    } catch (error) {
      dispatch(sendOrderFailed());
      dispatch(openOrderModalError());
      console.error(error);
    }
  };
};
