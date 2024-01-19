import React, { useEffect, useMemo } from 'react';
import Modal from '../modal/modal';
import { FeedDetail } from '../feed-detail/feed-detail';
import { useNavigate, useParams } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../utils/hooks/hook';
// import { getDetaiFeedlRequest } from '../../services/feed/feed-slice';
// import {
//   closeModal,
//   showModalIngredientsDetail
// } from '../../services/modal/modal-slice';
// import {
//   wsConnect,
//   wsDisconnect as feedDiconnect
// } from '../../services/feed/feed-slice';

export function ModalFeedDetail() {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // const feedDetail = useAppSelector((state) => state.feed.feedDetail);
  // const feedDetailStrucure = useAppSelector(
  //   (state) => state.feed.feedDetailStrucure
  // );
  // const feedDetailRequest = useAppSelector((state) => state.feed.requestDetail);
  // const feedDetailFailed = useAppSelector((state) => state.feed.failedDetail);
  // const sumIngredients = useAppSelector((state) => state.feed.sumIngredients);
  // const feeds = useAppSelector((state) => state.feed.feeds);
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
  // useEffect(() => {
  //   if (params.id && feeds.length > 0) {
  //     dispatch(getDetaiFeedlRequest({ feeds: feeds, id: params.id }));
  //   }
  // }, [feeds]);

  // const showModalIngridientDetails = useAppSelector(
  //   (state) => state.modal.modalIngridientDetail
  // );

  const handleCloseModal = () => {
    // dispatch(closeModal());
    navigate('/feed');
  };

  const handleEscapeClose = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscapeClose);

    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, []);

  const content = useMemo(() => {
    if (feedDetail && feedDetailStrucure) {
      return (
        <Modal onClose={handleCloseModal}>
          <FeedDetail
            feedDetailFailed={feedDetailFailed}
            feedDetailRequest={feedDetailRequest}
            feedDetail={feedDetail}
            feedDetailStrucure={feedDetailStrucure}
            sumIngredients={sumIngredients}
          />
        </Modal>
      );
    } else if (feedDetail && feedDetailStrucure) {
      return (
        <Modal onClose={handleCloseModal}>
          <FeedDetail
            feedDetailFailed={feedDetailFailed}
            feedDetailRequest={feedDetailRequest}
            feedDetail={feedDetail}
            feedDetailStrucure={feedDetailStrucure}
            sumIngredients={sumIngredients}
          />
        </Modal>
      );
    } else {
      return <div></div>;
    }
  }, [feedDetail, feedDetailStrucure]);

  return content;
}
