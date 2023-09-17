import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  ingredients: [], // список ингридиентов
  isLoadedIngredientsRequest: false, // процесс загрузки ингридиентов
  isLoadedIngredientsFailed: false, // ошибка загрузки ингридиентов
  currentTab: 'bun', // вкладка ингридиентов по умолчанию
  ingredientForModal: {}, // ингридиент который открывается в модалке
  isOpenIngredientModal: false, //модалка открыта или закрыта
  cart: [], // массив с ингридиентами в корзине из конструктора берется
  order: {}, //данные заказа для отправки на сервер
  isOpenOrderModal: false, // открыта ли модалка с оформлением заказа
  isOpenOrderErrorModal: false, // открыта ли модалка с ошибкой
  orderRequest: false, // процесс отправки заказа
  orderFailed: false, //ошибка отправки заказа
  preloader: false // прелоадер
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    // включить прелоадер
    enableLoader(state) {
      state.preloader = true;
    },
    // отключить прелоадер
    disableLoader(state) {
      state.preloader = false;
    },
    // запрос получения ингридиентов
    getIngredientsRequest(state) {
      state.isLoadedIngredientsRequest = true;
      state.isLoadedIngredientsFailed = false;
      state.preloader = true;
    },
    // запрос получения ингридиентов успешно
    getIngredientsSuccess(state, action) {
      state.ingredients = action.payload;
      state.isLoadedIngredientsRequest = false;
      state.preloader = false;
    },
    // запрос получения ингридиентов ошибка
    getIngredientsFailed(state) {
      state.isLoadedIngredientsRequest = false;
      state.isLoadedIngredientsFailed = true;
      state.preloader = false;
    },
    // Переключение вкладок
    switсhTab(state, action) {
      state.currentTab = action.payload;
    },
    // добавление ингридиента которого нужно показать в модалке
    openIngredientModal(state, action) {
      state.isOpenIngredientModal = true;
      state.ingredientForModal = action.payload;
    },
    // закрыть модалку с ингридиентом
    closeIngredientModal(state) {
      state.ingredientForModal = {};
      state.isOpenIngredientModal = false;
    },
    // добавить ингридиент
    addIngredient(state, action) {
      if (action.payload.type === 'bun') {
        const index = state.cart.findIndex((bun) => bun.type === 'bun');
        index !== -1
          ? state.cart.splice(index, 1, action.payload)
          : state.cart.push(action.payload);
      } else {
        state.cart.push(action.payload);
      }
    },
    // удалить ингридиент
    deleteIngredient(state, action) {
      const index = state.cart.findIndex((item) => item.uid === action.payload);
      state.cart.splice(index, 1);
    },
    sortCart(state, action) {
      const { hoverIndex, dragIndex } = action.payload;
      const dragItem = state.cart[dragIndex];
      if (dragItem) {
        const prevItem = state.cart.splice(hoverIndex, 1, dragItem);
        state.cart.splice(dragIndex, 1, prevItem[0]);
      }
    },
    // очистить корзину
    clearCart(state) {
      state.cart = initialState.cart;
    },
    // оптравить заказ
    sendOrderRequest(state) {
      state.preloader = true;
      state.orderRequest = true;
      state.orderFailed = false;
    },
    // отправка успешна
    sendOrderSuccess(state, action) {
      state.order = action.payload;
      state.orderRequest = false;
      state.preloader = false;
    },
    // отправка не успешна
    sendOrderFailed(state) {
      state.orderRequest = false;
      state.orderFailed = true;
      state.preloader = false;
    },
    // модалка с оформлением заказа
    openOrderModal(state) {
      state.isOpenOrderModal = true;
    },
    // модалка с оформлением заказа - ошибка
    openOrderModalError(state) {
      state.isOpenOrderErrorModal = true;
    },
    // закрыть модалку оофрмления заказа
    closeOrderModal(state) {
      state.isOpenOrderModal = false;
      state.order = {};
    },
    // модалка с оформлением заказа - ошибка
    closeOrderModalError(state) {
      state.isOpenOrderErrorModal = false;
    },
    // Генерация uuid кода для уникализации key
    setUuid(state, action) {
      state.uuid = action.payload;
    }
  }
});

export const {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
  switсhTab,
  openIngredientModal,
  closeIngredientModal,
  addIngredient,
  deleteIngredient,
  sortCart,
  clearCart,
  sendOrderRequest,
  sendOrderSuccess,
  sendOrderFailed,
  openOrderModal,
  openOrderModalError,
  closeOrderModal,
  closeOrderModalError,
  setUuid
} = burgerSlice.actions; // экшены создались сами внутри burgerSlice

export default burgerSlice.reducer; // редьюсеры экспортнем по умолчанию
