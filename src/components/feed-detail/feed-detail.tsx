import { FC, useMemo } from 'react';
import Style from './feed-detail.module.css';
import {
  CurrencyIcon,
  FormattedDate
} from '@ya.praktikum/react-developer-burger-ui-components';
// import { useAppDispatch } from '../../utils/hooks/hook';
import { IIFeedDetail } from '../../utils/types';

export const FeedDetail: FC<IIFeedDetail> = ({
  feedDetailFailed,
  feedDetailRequest,
  feedDetail,
  feedDetailStrucure,
  sumIngredients
}) => {
  // const dispatch = useAppDispatch();

  const checkStatusBurger = () => {
    if (feedDetail.status === 'done') {
      return 'Выполнен';
    } else {
      return 'Не выполнен';
    }
  };

  const contentDetail =
    Object.keys(feedDetail).length > 0 ? (
      <>
        <span className={`${Style.number} mb-10 text text_type_digits-default`}>
          #{feedDetail.number}
        </span>
        <p className={`${Style.line} mb-3 text text_type_main-medium`}>
          {feedDetail.name}
        </p>
        <span className={`${Style.line} mb-6 text text_type_main-medium`}>
          Состав:
        </span>
        <ul className={`${Style.list}`}>
          {feedDetailStrucure.map((el, index) => {
            return (
              <li key={index} className={`${Style.list_element} mb-4`}>
                <div className={`${Style.image_name}`}>
                  <img
                    className={`${Style.image_ingredient}`}
                    src={el.image}
                    alt={el.name}
                  />
                  <p
                    className={`${Style.name_ingredient} ml-4 text text_type_main-default`}
                  >
                    {el.name}
                  </p>
                </div>
                <div className={`${Style.currency} ml-4 mr-6`}>
                  <span
                    className={`${Style.currency_text} mr-2 text text_type_digits-default`}
                  >
                    {el.quantity}x{el.price}
                  </span>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
            );
          })}
        </ul>
        <div className={`${Style.total} mt-10`}>
          <FormattedDate
            className={`text text_type_main-small text_color_inactive`}
            date={new Date(feedDetail.createdAt)}
          />
          <div className={`${Style.currency}`}>
            <p className={`text text_type_digits-default mr-2`}>
              {sumIngredients}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </>
    ) : (
      <div>no content</div>
    );

  const content = useMemo(() => {
    if (feedDetailRequest) {
      return <div>Загрузка</div>;
    } else if (feedDetailFailed) {
      return <div>Ошибка</div>;
    } else if (Object.keys(feedDetail).length > 0) {
      return contentDetail;
    }
  }, [feedDetail, feedDetailRequest, feedDetailFailed]);

  return <div className={`${Style.container}`}>{content}</div>;
};
