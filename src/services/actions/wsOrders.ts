import wsOrdersSlice from '../reducers/ws-orders';

export const {
  wsOrdersConnectionSuccess,
  wsOrdersConnectionClosed,
  wsOrdersConnectionError,
  wsOrdersGetMessage,
  wsOrdersSelect
} = wsOrdersSlice.actions;
