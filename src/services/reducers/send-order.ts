import { createSlice } from '@reduxjs/toolkit';
import { InitialStateOrder } from '../../utils/types';

const initialState: InitialStateOrder = {
  order: undefined,
  orderRequest: false, // процесс отправки заказа
  orderFailed: false //ошибка отправки заказа
};

const sendOrderSlice = createSlice({
  name: 'sendOrder',
  initialState,
  reducers: {
    // оптравить заказ
    sendOrderRequest(state) {
      state.orderRequest = true;
      state.orderFailed = false;
    },
    // отправка успешна
    sendOrderSuccess(state, action) {
      state.order = action.payload;
      state.orderRequest = false;
    },
    // отправка не успешна
    sendOrderFailed(state) {
      state.orderRequest = false;
      state.orderFailed = true;
    }
  }
});

export default sendOrderSlice; // редьюсеры экспортнем по умолчанию
