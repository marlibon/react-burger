import { loadAllCards } from "../../utils/fetch";
import { getIngredientsFailed, getIngredientsRequest, getIngredientsSuccess } from "../reducers/burger-ingredients";

export const getIngredients = () => {
    return async (dispatch) => {
        dispatch(getIngredientsRequest())
        try {
          const res = await loadAllCards()
          dispatch(getIngredientsSuccess(res.data));
        } catch (error) {
          dispatch(getIngredientsFailed());
          console.error(error)
        }
      };
}