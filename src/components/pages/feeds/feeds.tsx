import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReportFeeds } from '../../report-feeds/report-feeds';
import { TapeFeed } from '../../tape-feed/tape-feed';
import { getStateFeeds } from '../../../services/selectors';
import { addStatusOrders } from '../../../services/actions';

export function Feeds() {
  const { total, totalToday, feeds, statusOrders } = useSelector(getStateFeeds);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addStatusOrders(feeds));
  }, [feeds]);

  return (
    <div style={{ display: 'flex' }}>
      <TapeFeed feeds={feeds}>
        <h2 className={`$text text_type_main-large`}>Лента заказов</h2>
      </TapeFeed>

      <ReportFeeds
        statusOrders={statusOrders}
        total={total}
        totalToday={totalToday}
      />
    </div>
  );
}
