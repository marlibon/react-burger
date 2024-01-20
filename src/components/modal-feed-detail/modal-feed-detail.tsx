import React, { useEffect, useMemo } from 'react';
import Modal from '../modal/modal';
import { FeedItemDetail } from '../feed-detail/feed-detail';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStateFeeds } from '../../services/selectors';
import Preloader from '../Preloader/Preloader';
import { getDetailFeedRequest } from '../../services/reducers/ws-feed';

export function ModalFeedDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const {
    sumIngredients,
    failedDetail,
    feeds,
    feedDetail,
    feedElementDetail,
    requestDetail
  } = useSelector(getStateFeeds);
  useEffect(() => {
    if (params.id && feeds.length > 0) {
      //@ts-ignore
      dispatch(getDetailFeedRequest({ feeds, id: params.id }));
    }
  }, [feeds]);

  const handleCloseModal = () => {
    navigate(-1);
  };

  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const content = useMemo(() => {
    if (feedDetail && feedElementDetail) {
      return (
        <Modal onClose={handleCloseModal}>
          <FeedItemDetail
            feedDetailFailed={failedDetail}
            feedDetailReq={requestDetail}
            feedDetail={feedDetail}
            feedElementDetail={feedElementDetail}
            sumIngredients={sumIngredients}
          />
        </Modal>
      );
    } else {
      return (
        <Modal onClose={handleCloseModal}>
          <Preloader />
        </Modal>
      );
    }
  }, [feedDetail, feedElementDetail]);

  return content;
}
