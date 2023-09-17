import styles from './burger-ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingridientPropTypes } from '../../../utils/types';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openIngredientModal } from '../../../services/reducers/burger';
import { useDrag } from 'react-dnd';

const BurgerIngredient = ({ ingredient }) => {
  const dispatch = useDispatch();

  const handleIngredientModal = (ingredient) => {
    dispatch(openIngredientModal(ingredient));
  };
  const [{ opacity }, dragRef] = useDrag({
    type: 'bun',
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });
  return (
    <li
      onClick={() => handleIngredientModal(ingredient)}
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
    </li>
  );
};
BurgerIngredient.propTypes = {
  ingredient: ingridientPropTypes.isRequired
};
export default BurgerIngredient;
