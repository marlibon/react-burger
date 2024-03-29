import TapeFeedStyle from './tape-feed.module.css';
import { FC, useEffect } from 'react';
import { Ingredient, TOrder, TOrderWS } from '../../utils/types';
import { FeedElement } from '../feed-element/feed-element';
import { useDispatch, useSelector } from 'react-redux';
import { LIVE_TABLE_SERVER_URL } from '../../services/constants';
import { getStateLoadIngredients } from '../../services/selectors';
import { wsConnect, wsDisconnect } from '../../services/reducers/ws-feed';
import { activeConnection } from '../../utils/helpers';

interface ITapeFeedProps {
  feeds: TOrderWS[];
  children?: React.ReactNode;
}

type TImage = {
  src: string;
  alt: string;
};

type TImageAndPrice = {
  images: TImage[];
  price: number;
};
export const TapeFeed: FC<ITapeFeedProps> = ({ feeds, children }) => {
  const ingredients = useSelector(getStateLoadIngredients).ingredients;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!activeConnection.has(LIVE_TABLE_SERVER_URL)) {
      dispatch(wsConnect(LIVE_TABLE_SERVER_URL));
      activeConnection.add(LIVE_TABLE_SERVER_URL);
    }
    return () => {
      dispatch(wsDisconnect());
      activeConnection.delete(LIVE_TABLE_SERVER_URL);
    };
  }, []);

  const getImagesAndTotalPrice = (
    ingredients: Ingredient[],
    idsOrder: string[]
  ): TImageAndPrice => {
    const images: TImage[] = [];
    let totalPrice = 0;
    idsOrder.forEach((el) => {
      ingredients.forEach((ingr) => {
        if (ingr._id === el) {
          images.push({ src: ingr.image_mobile, alt: ingr.name });
          totalPrice += ingr.price;
        }
      });
    });
    return { images: images, price: totalPrice };
  };

  return (
    <div>
      {children}
      <ul className={`${TapeFeedStyle.list}`}>
        {feeds.map((feedElement: TOrderWS) => {
          const imagesAndPrice = getImagesAndTotalPrice(
            ingredients,
            feedElement.ingredients
          );
          return (
            <li key={feedElement._id}>
              <FeedElement
                totalPrice={imagesAndPrice.price}
                name={feedElement.name}
                number={feedElement.number}
                createdAt={new Date(feedElement.createdAt)}
                images={imagesAndPrice.images}
                id={feedElement._id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
