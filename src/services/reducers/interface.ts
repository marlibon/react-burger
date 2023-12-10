import { createSlice } from '@reduxjs/toolkit';
import { InitialStateInterface, TTab } from '../../utils/types';

const initialState: InitialStateInterface = {
  currentTab: TTab.bun, // вкладка ингридиентов по умолчанию
  ingredientForModal: {}, // ингридиент который открывается в модалке
  isOpenIngredientModal: false, //модалка открыта или закрыта
  isOpenOrderModal: false, // открыта ли модалка с оформлением заказа
  isOpenOrderErrorModal: false // открыта ли модалка с ошибкой
};

const interfaceBurger = createSlice({
  name: 'interface',
  initialState,
  reducers: {
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
      state.order = undefined;
    },
    // модалка с оформлением заказа - ошибка
    closeOrderModalError(state) {
      state.isOpenOrderErrorModal = false;
    }
  }
});

export default interfaceBurger; // редьюсеры экспортнем по умолчанию
