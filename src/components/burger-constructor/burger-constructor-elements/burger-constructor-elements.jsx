import styles from './burger-constructor-elements.module.css';
import {
  ConstructorElement,
  DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingridientPropTypes } from '../../../utils/types';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import {
  addIngredient,
  deleteIngredient
} from '../../../services/reducers/burger';
import { useDrop } from 'react-dnd';
import DragAndDropContainer from '../../drag-drop-container/drag-drop-container';

const BurgerConstructorElements = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.burger);

  const bun = cart.find((item) => item.type === 'bun'); // нашли булочку
  const main = cart.filter((item) => item.type !== 'bun'); // нашли НЕ булочки

  // функция для добавления ингридиента в корзину
  const addItem = (ingredient) => {
    const uid = uuid();
    dispatch(addIngredient({ ...ingredient, uid }));
  };
  // функция удаления
  const handleDeleteItem = (ingredient) => {
    dispatch(deleteIngredient(ingredient.uuid));
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'bun',
    collect: (monitor) => ({
      isHover: monitor.isOver()
    }),
    drop(ingredient) {
      addItem(ingredient);
    }
  });

  return (
    <div className={styles.constructor_wrapper}>
      {bun && (
        <div className={styles.item_ingridient}>
          <ConstructorElement
            type="top"
            text={bun.name + '(вверх'}
            price={bun.price}
            thumbnail={bun.image}
            isLocked={true}
          />
        </div>
      )}
      {main.length ? (
        <ul className={styles.list} target={dropTarget} onHover={isHover}>
          {main.map((ingredient, index) => (
            <li className={styles.item_ingridient} key={ingredient._id + index}>
              <div className={styles.drag_icon}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={ingredient.name}
                handleClose={() => handleDeleteItem(ingredient)}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </li>
          ))}
        </ul>
      ) : (
        <DragAndDropContainer
          text="Перетащите начинки"
          target={dropTarget}
          onHover={isHover}
        />
      )}
      {bun && (
        <div className={styles.item_ingridient}>
          <ConstructorElement
            type="bottom"
            text={bun.name + '(низ'}
            price={bun.price}
            thumbnail={bun.image}
            isLocked={true}
          />
        </div>
      )}
    </div>
  );
};
export default BurgerConstructorElements;
