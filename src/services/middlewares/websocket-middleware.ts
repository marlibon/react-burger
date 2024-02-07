import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload
} from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { RootState } from '../reducers';

export type TwsActionTypes = {
  wsConnect: ActionCreatorWithPayload<string>;
  wsDisconnect: ActionCreatorWithoutPayload;
  wsSendMessage?: ActionCreatorWithPayload<any>;
  wsConnecting: ActionCreatorWithoutPayload;
  onOpen: ActionCreatorWithoutPayload;
  onClose: ActionCreatorWithoutPayload;
  onError: ActionCreatorWithPayload<string>;
  onMessage: ActionCreatorWithPayload<any>;
};

export const websocketMiddleware = (
  wsActions: TwsActionTypes
): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const {
        wsConnect,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage,
        wsConnecting,
        wsDisconnect
      } = wsActions;
      const { type } = action;

      if (type === wsConnect.type) {
        socket = new WebSocket(action.payload);
        console.log(socket, action.payload);
        dispatch(wsConnecting());
      }
      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen());
        };

        socket.onerror = (event) => {
          dispatch(onError('Error'));
        };

        socket.onmessage = (event) => {
          console.log(event);
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(onMessage(parsedData));
        };

        socket.onclose = (event) => {
          dispatch(onClose());
        };

        if (wsSendMessage && type === wsSendMessage.type) {
          socket.send(JSON.stringify(action.payload));
        }

        if (wsDisconnect.type === type) {
          socket.close();
          socket = null;
        }
      }
      next(action);
    };
  };
};
