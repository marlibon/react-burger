import { useEffect, useMemo } from 'react';
import Modal from '../modal/modal';
import { FeedItemDetail } from '../feed-detail/feed-detail';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStateFeeds, getStateOrders } from '../../services/selectors';
import { RootState } from '../../services/reducers';
import { getDetailFeedRequest } from '../../services/reducers/ws-feed';

function ModalOrderDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const {
    feedDetail,
    failedDetail,
    requestDetail,
    sumIngredients,
    feedElementDetail
  } = useSelector(getStateFeeds);

  const { orders } = useSelector(getStateOrders);

  useEffect(() => {
    if (params.id && orders.length > 0) {
      //@ts-ignore
      dispatch(getDetailFeedRequest({ feeds: orders, id: params.id }));
    }
  }, [orders]);

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
      return <div></div>;
    }
  }, [feedDetail, feedElementDetail, orders]);

  return content;
}

export default ModalOrderDetail;
