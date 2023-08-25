import styles from './burger-constructor-elements.module.css'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {useEffect, useState} from 'react'
import {ingredientsPropTypes} from '../../../utils/types'
import PropTypes from 'prop-types'

const BurgerConstructorElements = ({data}) => {
  const [ingridients, setIngredients] = useState([])

  // перемешивание массива
  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    // берем захаркоженный массив ингридиентов, сокращаем его до 7шт., перемешиваем и сохраняем как стейт для отрисовки
    setIngredients(shuffleArray(data.slice(0, 7)))
  }, [])

  // если мы просматриваем не первый и не последний ингридиент в списке то показываем кнопки drag and drop
  function viewDragAndDropBtns(index, length) {
    if (index !== 0 && index !== length)
      return (
        <div className={styles.drag_icon}>
          <DragIcon type='primary' />
        </div>
      )
  }

  function handleTypeButton(index, length) {
    return index === 0 ? 'top' : index === length ? 'bottom' : ''
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
              type={handleTypeButton(index, ingridients.length - 1)}
              text={ingredient.name}
              price={ingredient.price}
              isLocked={index % 2 > 0}
              thumbnail={ingredient.image}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
BurgerConstructorElements.propTypes = {
  data: ingredientsPropTypes.isRequired,
}
export default BurgerConstructorElements
