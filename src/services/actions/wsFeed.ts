import wsFeed from '../reducers/ws-feed';

export const {
  addStatusOrders,
  wsConnecting,
  wsConnect,
  wsOpen,
  wsClose,
  wssError,
  wssMessage,
  wsDisconnect
} = wsFeed.actions;
