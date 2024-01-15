import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOrder, TWsResponseBody } from '../../utils/types';

interface TWsState {
  isWsConnected: boolean;
  message: TWsResponseBody | null;
  error?: Event;
  selectedFeed?: TOrder;
}

const initialState: TWsState = {
  isWsConnected: false,
  message: null
};

const wsOrdersSlice = createSlice({
  name: 'wsOrders',
  initialState,
  reducers: {
    wsOrdersConnectionSuccess(state) {
      state.isWsConnected = true;
      state.error = undefined;
    },
    wsOrdersConnectionClosed(state) {
      state.isWsConnected = false;
      state.error = undefined;
    },
    wsOrdersConnectionError(state, action: PayloadAction<Event>) {
      state.isWsConnected = false;
      state.error = action.payload;
    },
    wsOrdersGetMessage(state, action: PayloadAction<TWsResponseBody>) {
      state.message = action.payload;
    },
    wsOrdersSelect(state, action: PayloadAction<TOrder>) {
      state.selectedFeed = action.payload;
    }
  }
});

export default wsOrdersSlice;
