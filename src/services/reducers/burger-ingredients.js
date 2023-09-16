import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  ingredients: [], // список ингридиентов
  ingredientsRequest: false, // процесс загрузки ингридиентов
  ingredientsFailed: false, // ошибка загрузки ингридиентов
  currentTab: 'bun', // вкладка ингридиентов по умолчанию
  ingredient: {}, // ингридиент который открывается в модалке
  ingredientModal: false, //модалка открыта или закрыта
  cart: [], // массив с ингридиентами в корзине из конструктора берется
  order: {}, //данные заказа для отправки на сервер
  orderModal: false, // открыта ли модалка с оформлением заказа
  orderRequest: false, // процесс отправки заказа
  orderFailed: false, //ошибка отправки заказа
  preloader: false, // прелоадер
};

const counterSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
      // включить прелоадер
      enableLoader(state) {
        state.preloader = true
      },
      // отключить прелоадер
      disableLoader(state) {
        state.preloader = false
      },
      // запрос получения ингридиентов
      getIngredientsRequest(state) {
        state.ingredientsRequest = true;
        state.ingredientsFailed = false;
        state.preloader = true;
      },
      // запрос получения ингридиентов успешно
      getIngredientsSuccess(state, action) {
        state.ingredients = action.payload;
        state.ingredientsRequest = false;
        state.preloader = false;
      },
      // запрос получения ингридиентов ошибка
      getIngredientsFailed(state) {
        state.ingredientsRequest = false;
        state.ingredientsFailed = true;
        state.preloader = false;
      },
      // Переключение вкладок
      switсhTab(state, action) {
        state.currentTab = action.payload
    },
      // добавление ингридиента которого нужно показать в модалке
      openIngredientModal(state, action) {
        state.ingredientModal = true
        state.ingredient = action.payload
      },
      // закрыть модалку с ингридиентом
      closeIngredientModal(state) {
        state.ingredient = {}
        state.ingredientModal = false
      },
  },
});

export const { 
  getIngredientsRequest, 
  getIngredientsSuccess,  
  getIngredientsFailed, 
  switсhTab, 
  openIngredientModal,
  closeIngredientModal,
} = counterSlice.actions; // экшены создались сами внутри counterSlice
export default counterSlice.reducer; // редьюсеры экспортнем по умолчанию