import wsFeed from '../reducers/ws-feed';

export const {
  wsFeedConnectionSuccess,
  wsFeedConnectionClosed,
  wsFeedConnectionError,
  wsFeedGetMessage,
  wsFeedSelect
} = wsFeed.actions;
