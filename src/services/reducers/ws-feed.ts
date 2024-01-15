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

const wsFeedSlice = createSlice({
  name: 'wsFeed',
  initialState,
  reducers: {
    wsFeedConnectionSuccess(state) {
      state.isWsConnected = true;
      state.error = undefined;
    },
    wsFeedConnectionClosed(state) {
      state.isWsConnected = false;
      state.error = undefined;
    },
    wsFeedConnectionError(state, action: PayloadAction<Event>) {
      state.isWsConnected = false;
      state.error = action.payload;
    },
    wsFeedGetMessage(state, action: PayloadAction<TWsResponseBody>) {
      state.message = action.payload;
    },
    wsFeedSelect(state, action: PayloadAction<TOrder>) {
      state.selectedFeed = action.payload;
    }
  }
});

export default wsFeedSlice;
