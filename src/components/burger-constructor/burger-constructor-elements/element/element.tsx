import React, { useRef } from 'react';
import styles from './element.module.css';
import {
  ConstructorElement,
  DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { deleteIngredient } from '../../../../services/actions';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { Ingredient } from '../../../../utils/types';

interface ElementProps {
  ingredient: Ingredient;
  index: number;
  onSort: (dragIndex: number, hoverIndex: number) => void;
}
const Element: React.FC<ElementProps> = ({ ingredient, index, onSort }) => {
  const ref = useRef<HTMLLIElement>(null);
  const dispatch = useDispatch();

  // функция удаления
  const handleDeleteItem = (ingredient: Ingredient) => {
    dispatch(deleteIngredient(ingredient.uid));
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'sort',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0.1 : 1;

  const [, drop] = useDrop({
    accept: 'sort',

    hover(item: any, monitor: any) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      onSort(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  drag(drop(ref));

  return (
    <li className={styles.item_ingridient} ref={ref} style={{ opacity }}>
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
  );
};

export default Element;
