import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TapeFeed } from '../../tape-feed/tape-feed';
import { getStateOrders } from '../../../services/selectors';
import { wsConnect } from '../../../services/reducers/ws-orders';
import { LIVE_TABLE_USER_SERVER_URL } from '../../../services/constants';
import { getCookie } from '../../../utils/helpers';
import Preloader from '../../Preloader/Preloader';

export const Orders = () => {
  const { orders } = useSelector(getStateOrders);

  if (orders) {
    return (
      <>
        <TapeFeed feeds={orders} />
      </>
    );
  } else {
    return <div></div>;
  }
};
