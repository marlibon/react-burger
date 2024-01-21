import { useSelector } from 'react-redux';
import { TapeFeed } from '../../tape-feed/tape-feed';
import { getStateOrders } from '../../../services/selectors';

export const Orders = () => {
  const { orders } = useSelector(getStateOrders);

  if (orders) {
    return (
      <>
        <TapeFeed feeds={orders} />
      </>
    );
  }
  return <div></div>;
};
