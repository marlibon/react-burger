import {
  sendOrderFailed,
  sendOrderRequest,
  sendOrderSuccess
} from '../actions';
import sendOrderSlice from './send-order';
import { InitialStateOrder, Order } from '../../utils/types';

const initialState: InitialStateOrder = {
  order: undefined,
  orderRequest: false, // процесс отправки заказа
  orderFailed: false //ошибка отправки заказа
};
const orderMock: Order = {
  name: 'name',
  number: 2345,
  order: {}
};
describe('sendOrderSlice reducers', () => {
  it('test_sendOrderRequest_behavior', () => {
    const nextState = sendOrderSlice.reducer(initialState, sendOrderRequest());
    expect(nextState.orderRequest).toBe(true);
    expect(nextState.orderFailed).toBe(false);
  });

  it('test_sendOrderSuccess_behavior', () => {
    const nextState = sendOrderSlice.reducer(
      initialState,
      sendOrderSuccess(orderMock)
    );
    expect(nextState.order).toBe(orderMock);
    expect(nextState.orderRequest).toBe(false);
  });

  it('test_sendOrderFailed_behavior', () => {
    const nextState = sendOrderSlice.reducer(initialState, sendOrderFailed());
    expect(nextState.orderFailed).toBe(true);
    expect(nextState.orderRequest).toBe(false);
  });
});
