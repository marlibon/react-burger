import FeedElementStyle from './feed-element.module.css';
import {
  CurrencyIcon,
  FormattedDate
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { FC, MouseEvent } from 'react';
// import { showModalIngredientsDetail } from '../../services/modal/modal-slice';
// import { useAppDispatch } from '../../utils/hooks/hook';

type TImage = {
  src: string;
  alt: string;
};

interface IFeedElement {
  images: TImage[];
  createdAt: Date;
  number: number;
  name: string;
  totalPrice: number;
  id: string;
}

export const FeedElement: FC<IFeedElement> = ({
  images,
  createdAt,
  number,
  name,
  totalPrice,
  id
}) => {
  let location = useLocation();
  // const dispatch = useAppDispatch();
  const hanldleOpenModalIngridientDetails = (
    event: React.SyntheticEvent<HTMLElement>
  ) => {
    // dispatch(showModalIngredientsDetail());
  };

  return (
    <Link
      className={FeedElementStyle.link}
      to={{
        pathname: `${
          location.pathname === '/feed'
            ? `/feed/${id}`
            : `/profile/orders/${id}`
        }`
      }}
      state={{ background: location }}
      onClick={hanldleOpenModalIngridientDetails}
    >
      <div className={`${FeedElementStyle.box} mb-4`}>
        <div className={`${FeedElementStyle.line} mt-6`}>
          <span className="text text_type_digits-default">#{number}</span>
          <FormattedDate
            className={`text text_type_main-small text_color_inactive`}
            date={new Date(createdAt)}
          />
        </div>
        <p
          className={`${FeedElementStyle.line} mt-6 text text_type_main-medium`}
        >
          {name}
        </p>
        <div className={`${FeedElementStyle.line} mt-6 mb-6`}>
          <ul className={`${FeedElementStyle.list}`}>
            {images.slice(0, 6).map((image, index) => {
              return (
                <li
                  className={
                    index === 5
                      ? FeedElementStyle.list_item_absolute
                      : FeedElementStyle.list_item
                  }
                  style={{ zIndex: index }}
                  key={index}
                >
                  <img
                    style={{ left: index * 50 }}
                    className={`${FeedElementStyle.image}`}
                    src={image.src}
                    alt={image.alt}
                  />
                </li>
              );
            })}
            {images.length > 6 ? (
              <li
                className={FeedElementStyle.list_item}
                style={{ zIndex: images.length }}
              >
                <span
                  style={{ left: 250 }}
                  className={`${FeedElementStyle.cover_image}`}
                >{`+${images.length - 6}`}</span>
              </li>
            ) : null}
          </ul>
          <div className={`${FeedElementStyle.price}`}>
            <span className="text text_type_digits-default mr-2">
              {totalPrice}
            </span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};
