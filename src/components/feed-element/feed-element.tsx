import {
  CurrencyIcon,
  FormattedDate
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';
import style from './feed-element.module.css';
import clsx from 'clsx';

interface IFeedElement {
  number: number;
  images: {
    src: string;
    alt: string;
  }[];
  createdAt: Date;
  id: string;
  totalPrice: number;
  name: string;
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
  return (
    <Link
      className={style.link}
      to={{
        pathname: `${
          location.pathname === '/feed'
            ? `/feed/${id}`
            : `/profile/orders/${id}`
        }`
      }}
      state={{ background: location }}
    >
      <div className={clsx(style.box, 'mb-4')}>
        <div className={clsx(style.line, 'mt-6')}>
          <span className="text text_type_digits-default">#{number}</span>
          <FormattedDate
            className={clsx(
              'text text_type_main-small',
              style.text_color_inactive
            )}
            date={new Date(createdAt)}
          />
        </div>
        <p className={clsx(style.line, 'mt-6', 'text text_type_main-medium')}>
          {name}
        </p>
        <div className={clsx(style.line, 'mt-6', 'mb-6')}>
          <ul className={style.list}>
            {images.slice(0, 6).map((image, index) => {
              return (
                <li
                  className={clsx(
                    index === 5 ? style.list_item_absolute : style.list_item
                  )}
                  style={{ zIndex: index }}
                  key={index}
                >
                  <img
                    style={{ left: index * 50 }}
                    className={style.image}
                    src={image.src}
                    alt={image.alt}
                  />
                </li>
              );
            })}
            {images.length > 6 ? (
              <li className={style.list_item} style={{ zIndex: images.length }}>
                <span style={{ left: 250 }} className={style.cover_image}>{`+${
                  images.length - 6
                }`}</span>
              </li>
            ) : null}
          </ul>
          <div className={style.price}>
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
