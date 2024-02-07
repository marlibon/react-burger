import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FeedItemDetail } from '../../feed-detail/feed-detail';
import { useDispatch, useSelector } from 'react-redux';
import { getStateFeeds } from '../../../services/selectors';

export function FeedDetailPage() {
  const dispatch = useDispatch();
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

  const content = useMemo(() => {
    if (feedDetail && feedElementDetail) {
      return (
        <FeedItemDetail
          feedDetailFailed={failedDetail}
          feedDetailReq={requestDetail}
          feedDetail={feedDetail}
          feedElementDetail={feedElementDetail}
          sumIngredients={sumIngredients}
        />
      );
    } else {
      return <div></div>;
    }
  }, [feedDetail, feedElementDetail]);

  return content;
}
