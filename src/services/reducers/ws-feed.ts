import { compose, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Bundle } from 'typescript';
import { stat } from 'fs';
import { act } from 'react-dom/test-utils';
import {
  IIngredientsFeedDetail,
  IInitialStateWsFeed,
  Ingredient,
  TOrderWS,
  WSStatus
} from '../../utils/types';
import { RootState } from '.';
import { base_url } from '../constants';

export interface IWSResponse {
  orders: TOrderWS[];
  success: boolean;
  total: number;
  totalToday: number;
}

interface IGetDetailData {
  feeds: TOrderWS[];
  id: string;
}

interface IResp {
  order: TOrderWS;
  ingredients: IIngredientsFeedDetail[];
  sumIngredients: number;
}

export const addStatus = (feeds: TOrderWS[]) => {
  const done: number[] = [];
  const pending: number[] = [];
  feeds.forEach((element) => {
    if (element.status === 'done') {
      done.push(element.number);
    } else if (element.status === 'pending') {
      pending.push(element.number);
    }
  });

  return { done: done, pending: pending };
};
export const getDetailFeedRequest = createAsyncThunk<
  IResp,
  IGetDetailData,
  { rejectValue: string; state: RootState }
>('feed/getDetailFeedRequest', async (data, thunkAPI) => {
  const elementFeeds = data.feeds.filter((el) => data.id === el._id);
  const orderNumber = elementFeeds[0]?.number;
  const response = await fetch(`${base_url}orders/${orderNumber}`, {
    method: 'GET'
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return thunkAPI.rejectWithValue('Server error');
    })
    .then((res) => {
      const resModificate = modificateOrder(
        thunkAPI.getState().loadIngredients.ingredients,
        res.orders[0].ingredients
      );
      return {
        order: res.orders[0],
        ingredients: resModificate.ingredients,
        sumIngredients: resModificate.sumIngredients
      };
    })
    .catch((err) => {
      return thunkAPI.rejectWithValue('Server error');
    });
  return response;
});

export const modificateOrder = (
  currentIngredients: Ingredient[],
  orderIngredients: string[]
) => {
  const result: IIngredientsFeedDetail[] = [];
  let sumResult = 0;
  orderIngredients.forEach((elementOrderIngredient) => {
    const ingredient: IIngredientsFeedDetail = {};
    currentIngredients.forEach((elementCurrentIngredient) => {
      if (elementCurrentIngredient._id === elementOrderIngredient) {
        const currentQuantity = result.find(
          (element) => element.id === elementOrderIngredient
        );
        if (
          currentQuantity &&
          currentQuantity.quantity &&
          currentQuantity.price
        ) {
          currentQuantity.quantity = currentQuantity.quantity + 1;
          currentQuantity.sumPrice =
            currentQuantity.quantity * currentQuantity.price;
          sumResult += currentQuantity.price;
        } else {
          ingredient.image = elementCurrentIngredient.image_mobile;
          ingredient.name = elementCurrentIngredient.name;
          ingredient.price = elementCurrentIngredient.price;
          ingredient.id = elementOrderIngredient;
          ingredient.quantity = 1;
          ingredient.sumPrice = ingredient.quantity * ingredient.price;
          sumResult += ingredient.price;
          result.push(ingredient);
        }
      }
    });
  });
  return { ingredients: result, sumIngredients: sumResult };
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

export const feedSlice = createSlice({
  name: 'feed',
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
      state.connectingError = '';
    },
    wsClose(state) {
      state.status = WSStatus.OFFLINE;
    },
    wssError(state, action) {
      state.connectingError = action.payload;
    },
    wssMessage(state, action: PayloadAction<IWSResponse>) {
      state.totalToday = action.payload.totalToday;
      state.total = action.payload.total;
      state.feeds = action.payload.orders;
    },
    addStatusOrders(state, action: PayloadAction<TOrderWS[]>) {
      state.statusOrders = addStatus(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetailFeedRequest.pending, (state) => {
        state.requestDetail = true;
      })
      .addCase(getDetailFeedRequest.fulfilled, (state, action) => {
        state.succcessDetail = true;
        state.failedDetail = false;
        state.requestDetail = false;
        state.feedDetail = action.payload.order;
        state.feedElementDetail = action.payload.ingredients;
        state.sumIngredients = action.payload.sumIngredients;
      });
  }
});

export const {
  addStatusOrders,
  wsConnecting,
  wsConnect,
  wsOpen,
  wsClose,
  wssError,
  wssMessage,
  wsDisconnect
} = feedSlice.actions;
export default feedSlice;
