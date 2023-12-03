import styles from './burger-constructor-elements.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, sortCart } from '../../../services/actions';
import { useDrop } from 'react-dnd';
import DragAndDropContainer from '../../drag-drop-container/drag-drop-container';
import { getStateOrder } from '../../../services/selectors';
import clsx from 'clsx';
import Element from './element/element';
import { Ingredient } from '../../../utils/types';

const BurgerConstructorElements: React.FC = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(getStateOrder);

  // функция для добавления ингридиента в корзину
  const addItem = (ingredient: Ingredient) => {
    dispatch(addIngredient({ ingredient }));
  };

  const handleSort = (dragIndex: number, hoverIndex: number) => {
    const dragItem = cart.main[dragIndex];
    if (dragItem) {
      dispatch(sortCart({ dragItem, hoverIndex, dragIndex }));
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver()
    }),
    drop(ingredient) {
      addItem(ingredient as Ingredient);
    }
  });

  return (
    <div className={styles.constructor_wrapper}>
      {cart.bun && (
        <div className={styles.item_ingridient}>
          <ConstructorElement
            type="top"
            text={cart.bun.name + '(вверх)'}
            price={cart.bun.price}
            thumbnail={cart.bun.image}
            isLocked={true}
          />
        </div>
      )}
      {cart.main.length ? (
        <ul
          className={clsx(
            styles.list,
            isHover && [styles.wrapper, styles.borderColor]
          )}
          ref={dropTarget}
        >
          {cart.main.map((ingredient, index) => (
            <Element
              ingredient={ingredient}
              index={index}
              key={ingredient._id + index}
              onSort={handleSort}
            />
          ))}
        </ul>
      ) : (
        <DragAndDropContainer
          text="Перетащите начинки"
          target={dropTarget}
          onHover={isHover}
        />
      )}
      {cart.bun && (
        <div className={styles.item_ingridient}>
          <ConstructorElement
            type="bottom"
            text={cart.bun.name + '(низ)'}
            price={cart.bun.price}
            thumbnail={cart.bun.image}
            isLocked={true}
          />
        </div>
      )}
    </div>
  );
};
export default BurgerConstructorElements;
