import {
  Counter,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingridientPropTypes } from '../../../utils/types';
import PropTypes from 'prop-types';
import { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openIngredientModal } from '../../../services/actions';
import { useDrag } from 'react-dnd';
import { getStateOrder } from '../../../services/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './burger-ingredient.module.css';

const BurgerIngredient = ({ ingredient }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(getStateOrder);

  const navigate = useNavigate();
  const location = useLocation();

  const openModal = useCallback(() => {
    navigate(`/ingredients/${ingredient._id}`, {
      state: { background: location }
    });
  }, [dispatch, ingredient._id, navigate, location]);

  const countUsing = useMemo(() => {
    return cart.main.filter((item) => item._id === ingredient._id).length;
  }, [cart.main, ingredient._id]);

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });
  return (
    <li
      onClick={openModal}
      className={styles.ingridient}
      ref={dragRef}
      style={{ opacity }}
    >
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={styles.image}
      />
      <div className={styles.price}>
        <span>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.title}>{ingredient.name}</p>
      {countUsing && (
        <div className={styles.counter}>
          <Counter count={countUsing} size="default" />
        </div>
      )}
    </li>
  );
};
BurgerIngredient.propTypes = {
  ingredient: PropTypes.shape(ingridientPropTypes).isRequired
};
export default BurgerIngredient;
