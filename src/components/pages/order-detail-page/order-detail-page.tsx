import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FeedItemDetail } from '../../feed-detail/feed-detail';

export function OrderDetailPage() {
  const params = useParams();
  const sumIngredients = 1068;
  const feedDetailFailed = false;
  const feedDetailReq = false;
  const feedDetail = {
    _id: '65aa568587899c001b829d9b',
    ingredients: ['643d69a5c3f7b9001cfa0943', '643d69a5c3f7b9001cfa093d'],
    owner: '651c45246d2997001caacae6',
    status: 'done',
    name: 'Флюоресцентный space бургер',
    createdAt: '2024-01-19T11:01:25.979Z',
    updatedAt: '2024-01-19T11:01:26.443Z',
    number: 32088,
    __v: 0
  };
  const feedElementDetail = [
    {
      image: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
      name: 'Соус фирменный Space Sauce',
      price: 80,
      id: '643d69a5c3f7b9001cfa0943',
      quantity: 1,
      sumPrice: 80
    },
    {
      image: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
      name: 'Флюоресцентная булка R2-D3',
      price: 988,
      id: '643d69a5c3f7b9001cfa093d',
      quantity: 1,
      sumPrice: 988
    }
  ];

  const content = useMemo(() => {
    if (feedDetail && feedElementDetail) {
      return (
        <FeedItemDetail
          feedDetailFailed={feedDetailFailed}
          feedDetailReq={feedDetailReq}
          feedDetail={feedDetail}
          feedElementDetail={feedElementDetail}
          sumIngredients={sumIngredients}
        />
      );
    } else {
      return <div></div>;
    }
  }, [
    feedDetail,
    feedElementDetail,
    sumIngredients,
    feedDetailFailed,
    feedDetailReq
  ]);

  return content;
}
