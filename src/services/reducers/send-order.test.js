import { configureStore } from '@reduxjs/toolkit';
import sendOrderSlice from './send-order';

describe('sendOrderSlice reducers', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer: sendOrderSlice.reducer });
  });

  it('test_sendOrderRequest_behavior', () => {
    store.dispatch(sendOrderSlice.actions.sendOrderRequest());
    const state = store.getState();
    expect(state.orderRequest).toBe(true);
    expect(state.orderFailed).toBe(false);
  });

  it('test_sendOrderSuccess_behavior', () => {
    const orderPayload = { id: '123', status: 'completed' };
    store.dispatch(sendOrderSlice.actions.sendOrderSuccess(orderPayload));
    const state = store.getState();
    expect(state.order).toEqual(orderPayload);
    expect(state.orderRequest).toBe(false);
  });

  it('test_sendOrderFailed_behavior', () => {
    store.dispatch(sendOrderSlice.actions.sendOrderFailed());
    const state = store.getState();
    expect(state.orderRequest).toBe(false);
    expect(state.orderFailed).toBe(true);
  });
});
