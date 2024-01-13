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
export interface IName {
  name: string;
}
export interface IPassword {
  password: string;
}
export interface IEmail {
  email: string;
}
export interface IToken {
  token: string;
}
