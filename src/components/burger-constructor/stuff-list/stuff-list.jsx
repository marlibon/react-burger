import styles from './stuff-list.module.css';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';
import { useSelector, useDispatch } from 'react-redux';
import { sortCart } from '../../../services/reducers/ingredients';
import { stuffListPropTypes } from '../../../utils/types';

const StuffList = ({ target, onHover }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.burger);

  const classes = `${styles.burgerBody} ${styles.borderColor}`;

  const borderColor = onHover ? classes : styles.burgerBody;

  const moveItemHandler = (dragIndex, hoverIndex) => {
    const dragItem = cart[dragIndex];

    if (dragItem) {
      dispatch(sortCart({ dragItem, hoverIndex, dragIndex }));
    }
  };

  const ingredientItem = cart.map(
    (ingredient, index) =>
      ingredient.type !== 'bun' && (
        <ConstructorIngredient
          ingredient={ingredient}
          key={ingredient.uid}
          index={index}
          onMove={moveItemHandler}
        />
      )
  );

  return (
    <ul className={borderColor} ref={target}>
      {ingredientItem}
    </ul>
  );
};

StuffList.propTypes = stuffListPropTypes.isRequired;

export default StuffList;
