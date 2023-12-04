import PropTypes from 'prop-types';

export const ingridientPropTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
  uid: PropTypes.string
};

export interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uid?: string;
}

export interface LoadIngredientsState {
  ingredients: Ingredient[] | [];
  isLoadedIngredientsRequest: boolean;
  isLoadedIngredientsFailed: boolean;
  preloader: boolean;
}

export enum TTab {
  bun = 'bun',
  sauce = 'sauce',
  main = 'main'
}
export interface Order {
  name: string;
  number: number;
  order?: any;
}

export interface InitialStateInterface {
  currentTab: TTab;
  ingredientForModal: any;
  isOpenIngredientModal: boolean;
  isOpenOrderModal: boolean;
  isOpenOrderErrorModal: boolean;
  order?: Order;
}

export interface InitialStateOrder {
  order?: Order;
  orderRequest: boolean;
  orderFailed: boolean;
}
export interface initialStateConstructor {
  cart: {
    bun?: Ingredient;
    main: Ingredient[];
  };
}

export interface InitialStateAuth {
  userData: null | any;
  registerRequest: boolean;
  registerFailed: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
  userRequest: boolean;
  userFailed: boolean;
  updateRequest: boolean;
  updateFailed: boolean;
  forgotSuccess: boolean;
  forgotRequest: boolean;
  forgotFailed: boolean;
  resetSuccess: boolean;
  resetRequest: boolean;
  resetFailed: boolean;
  logoutRequest: boolean;
  logoutFailed: boolean;
}
