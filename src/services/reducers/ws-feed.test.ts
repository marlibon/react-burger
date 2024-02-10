import feedSlice, { getDetailFeedRequest, modificateOrder } from './ws-feed';
import {
  Ingredient,
  IIngredientsFeedDetail,
  WSStatus,
  IInitialStateWsFeed
} from '../../utils/types';
import {
  wsConnecting,
  wsConnect,
  wsDisconnect,
  wsOpen,
  wsClose,
  wssError,
  wssMessage,
  IWSResponse,
  addStatusOrders
} from './ws-feed';
const mockData = {
  feeds: [
    {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      __v: 0
    },
    {
      _id: '643d69a5c3f7b9001cfa0941',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
      __v: 0
    }
  ],
  id: '1'
};
const initialState: IInitialStateWsFeed = {
  status: WSStatus.OFFLINE,
  feeds: [],
  connectingError: '',
  statusOrders: {},
  totalToday: 0,
  total: 0,
  requestDetail: false,
  failedDetail: false,
  succcessDetail: false,
  feedDetail: undefined,
  feedElementDetail: undefined,
  sumIngredients: 0
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
    expect(nextState.connectingError).toEqual('');
  });
  it('should handle wsClose', () => {
    const nextState = feedSlice.reducer(initialState, wsClose());
    expect(nextState.status).toEqual(WSStatus.OFFLINE);
  });
  it('should handle wssError', () => {
    const nextState = feedSlice.reducer(initialState, wssError('error'));
    expect(nextState.connectingError).toEqual('error');
  });
  it('should handle wssMessage', () => {
    const nextState = feedSlice.reducer(
      initialState,
      wssMessage(mockWsResponse)
    );
    expect(nextState.totalToday).toEqual(mockWsResponse.totalToday);
    expect(nextState.total).toEqual(mockWsResponse.total);
    expect(nextState.feeds).toEqual(mockWsResponse.orders);
  });
});
