import feedSlice, { orderSlice } from './ws-orders';
import { WSStatus } from '../../utils/types';
import {
  wsConnecting,
  wsConnect,
  wsDisconnect,
  wsOpen,
  wsClose,
  wssError,
  wssMessage
} from './ws-orders';
import { IWSResponse } from './ws-feed';
const initialState: orderSlice = {
  status: WSStatus.OFFLINE,
  orders: [],
  connectionError: ''
};
const mockWsResponse: IWSResponse = {
  orders: [
    {
      createdAt: '2024-02-10T07:51:34.477Z',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945'
      ],
      name: 'Space флюоресцентный традиционный-галактический антарианский бургер',
      number: 34164,
      status: 'done',
      updatedAt: '2024-02-10T07:51:34.908Z',
      _id: '65c72b0697ede0001d0580e9'
    }
  ],
  success: true,
  total: 33790,
  totalToday: 32
};

describe('feedSlice reducer', () => {
  it('should handle wsConnecting', () => {
    const nextState = feedSlice.reducer(initialState, wsConnecting());
    expect(nextState.status).toEqual(WSStatus.CONNECTING);
  });
  it('should handle wsConnect', () => {
    const nextState = feedSlice.reducer(initialState, wsConnect(initialState));
    expect(nextState.status).toEqual(WSStatus.CONNECT);
  });
  it('should handle wsDisconnect', () => {
    const nextState = feedSlice.reducer(initialState, wsDisconnect());
    expect(nextState.status).toEqual(WSStatus.DISCONNECT);
  });
  it('should handle wsOpen', () => {
    const nextState = feedSlice.reducer(initialState, wsOpen());
    expect(nextState.status).toEqual(WSStatus.ONLINE);
    expect(nextState.connectionError).toEqual('');
  });
  it('should handle wsClose', () => {
    const nextState = feedSlice.reducer(initialState, wsClose());
    expect(nextState.status).toEqual(WSStatus.OFFLINE);
  });
  it('should handle wssError', () => {
    const nextState = feedSlice.reducer(initialState, wssError('error'));
    expect(nextState.connectionError).toEqual('error');
  });
  it('should handle wssMessage', () => {
    const nextState = feedSlice.reducer(
      initialState,
      wssMessage(mockWsResponse)
    );
    expect(nextState.orders).toEqual(mockWsResponse.orders);
  });
});
