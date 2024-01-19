import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FeedDetail } from '../../feed-detail/feed-detail';
// import { FeedDetail } from '../../components/feed-detail/feed-detail';
// import { useAppDispatch, useAppSelector } from '../../utils/hooks/hook';
// import { getDetaiFeedlRequest } from '../../services/feed/feed-slice';
// import { getUserRequest } from '../../services/forms/forms-thunks';

export function OrderDetailPage() {
  // const dispatch = useAppDispatch();
  const params = useParams();
  // const feedDetail = useAppSelector((state) => state.feed.feedDetail)
  // const feedDetailStrucure = useAppSelector((state) => state.feed.feedDetailStrucure)
  // const feedDetailRequest = useAppSelector((state) => state.feed.requestDetail)
  // const feedDetailFailed = useAppSelector((state) => state.feed.failedDetail)
  // const sumIngredients = useAppSelector((state) => state.feed.sumIngredients)
  // const orders = useAppSelector((state) => state.orders.orders)
  // console.log(orders);
  // useEffect(() => {
  //   if (localStorage.getItem('accessToken')) {
  //     dispatch(getUserRequest())
  //   }
  // }, [params])

  // useEffect(() => {
  //   if (params.id) {
  //     dispatch(getDetaiFeedlRequest({ feeds: orders, id: params.id }));
  //   }
  // }, [orders, params.id]);

  const sumIngredients = 1068;
  const feedDetailFailed = false;
  const feedDetailRequest = false;
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
  const feedDetailStrucure = [
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
    if (feedDetail && feedDetailStrucure) {
      return (
        <FeedDetail
          feedDetailFailed={feedDetailFailed}
          feedDetailRequest={feedDetailRequest}
          feedDetail={feedDetail}
          feedDetailStrucure={feedDetailStrucure}
          sumIngredients={sumIngredients}
        />
      );
    } else {
      return <div></div>;
    }
  }, [
    feedDetail,
    feedDetailStrucure,
    sumIngredients,
    feedDetailFailed,
    feedDetailRequest
  ]);

  return content;
}
