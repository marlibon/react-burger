import styles from './burger-constructor-elements.module.css'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {ingridientPropTypes} from '../../../utils/types'
import PropTypes from 'prop-types'

const BurgerConstructorElements = ({ingridients, onDelete}) => {
  // если мы просматриваем не первый и не последний ингридиент в списке то показываем кнопки drag and drop
  function viewDragAndDropBtns(index, length) {
    if (index !== 0 && index !== length)
      return (
        <div className={styles.drag_icon}>
          <DragIcon type='primary' />
        </div>
      )
  }

  function handleTypeButton(index, length, text) {
    return index === 0
      ? {type: 'top', isLocked: true, text: `${text} (верх)`}
      : index === length
      ? {type: 'bottom', isLocked: true, text: `${text} (низ)`}
      : {text, isLocked: false}
  }

  return (
    <div className={styles.constructor_wrapper}>
      <ul className={styles.list}>
        {ingridients.map((ingredient, index) => (
          <li
            className={styles.item_ingridient}
            key={ingredient._id}
          >
            {viewDragAndDropBtns(index, ingridients.length - 1)}
            <ConstructorElement
              {...handleTypeButton(
                index,
                ingridients.length - 1,
                ingredient.name
              )}
              handleClose={() => onDelete(ingredient._id)}
              price={ingredient.price}
              thumbnail={ingredient.image}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
BurgerConstructorElements.propTypes = {
  ingridients: PropTypes.arrayOf(PropTypes.shape(ingridientPropTypes))
    .isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default BurgerConstructorElements
