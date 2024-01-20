import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { TOrderWS, WSStatus } from '../../utils/types';
import { IWSResponse } from './ws-feed';

export type orderSlice = {
  status: WSStatus;
  connectionError: string;
  orders: TOrderWS[];
};

const initialState: orderSlice = {
  status: WSStatus.OFFLINE,
  orders: [],
  connectionError: ''
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    wsConnecting(state) {
      state.status = WSStatus.CONNECTING;
    },
    wsConnect(state, action) {
      state.status = WSStatus.CONNECT;
    },
    wsDisconnect(state) {
      state.status = WSStatus.DISCONNECT;
    },
    wsOpen(state) {
      state.status = WSStatus.ONLINE;
      state.connectionError = '';
    },
    wsClose(state) {
      state.status = WSStatus.OFFLINE;
    },
    wssError(state, action) {
      state.connectionError = action.payload;
    },
    wssMessage(state, action: PayloadAction<IWSResponse>) {
      state.orders = action.payload.orders;
    }
  }
});

export const {
  wsConnecting,
  wsConnect,
  wsOpen,
  wsClose,
  wssError,
  wssMessage,
  wsDisconnect
} = orderSlice.actions;
export default orderSlice;
