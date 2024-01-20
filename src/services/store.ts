import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { websocketMiddleware } from './middlewares/websocket-middleware';

import {
  wsConnect as FeedWsConnect,
  wsConnecting as FeedWsConnecting,
  wsClose as FeedWsClose,
  wssError as FeedWsError,
  wssMessage as FeedWsMessage,
  wsDisconnect as FeedWsDisconnect,
  wsOpen as FeedWsOpen,
  wsConnecting as OrderWsConnecting
} from './reducers/ws-feed';
import {
  wsConnect as OrderWsConnect,
  wsOpen as OrderWsOpen,
  wsClose as OrderWsClose,
  wssError as OrderWsError,
  wssMessage as OrderWsMessage,
  wsDisconnect as OrderWsDisconnect
} from './reducers/ws-orders';
const FeedMiddleware: any = websocketMiddleware({
  wsConnect: FeedWsConnect,
  wsDisconnect: FeedWsDisconnect,
  wsConnecting: FeedWsConnecting,
  onOpen: FeedWsOpen,
  onClose: FeedWsClose,
  onError: FeedWsError,
  onMessage: FeedWsMessage
});

const OrderMiddleware: any = websocketMiddleware({
  wsConnect: OrderWsConnect,
  wsDisconnect: OrderWsDisconnect,
  wsConnecting: OrderWsConnecting,
  onOpen: OrderWsOpen,
  onClose: OrderWsClose,
  onError: OrderWsError,
  onMessage: OrderWsMessage
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(OrderMiddleware, FeedMiddleware);
  },
  devTools: true
});
export type AppDispatch = typeof store.dispatch;
