// import { useAppSelector } from '../../utils/hooks/hook';

import { TapeFeed } from '../../tape-feed/tape-feed';

export const Orders = () => {
  // const orders = useAppSelector((state) => state.orders.orders)
  const orders = [
    {
      _id: '65aa568587899c001b829d9b',
      ingredients: ['643d69a5c3f7b9001cfa0943', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный space бургер',
      createdAt: '2024-01-19T11:01:25.979Z',
      updatedAt: '2024-01-19T11:01:26.443Z',
      number: 32088
    }
  ];

  const reverseOrders = orders ? [...orders].reverse() : null;

  if (reverseOrders) {
    return (
      <>
        <TapeFeed feeds={reverseOrders} />
      </>
    );
  } else {
    return <div></div>;
  }
};
