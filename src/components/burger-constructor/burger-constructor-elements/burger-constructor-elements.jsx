import styles from './burger-constructor-elements.module.css'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {useEffect, useId, useState} from 'react'
import {ingridientPropTypes} from '../../../utils/types'
import PropTypes from 'prop-types'

const BurgerConstructorElements = ({data}) => {
  const [ingridients, setIngredients] = useState([])
  const _id = useId()
  // перемешивание массива
  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    // нашли первую попавшуюся булочку, чтобы разместить сверху или снизу
    const findedBun = data.find((product) => product.type === 'bun')
    // удаляем булочки, чтобы они не были по центру бургера
    const deleteBuns = data.filter((product) => product.type !== 'bun')
    // перемешиваем ингридиенты, сокращаем список
    const shuffleArr = shuffleArray(deleteBuns.slice(0, 5))
    // делаем первым и посл.элементом в массиве булочку, также для правильной работы атрибута key подправляем id первого элемента
    const newArray = [{...findedBun, _id}, ...shuffleArr, findedBun]
    // сохраняем в стейт
    setIngredients(newArray)
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

  function handleTextButton(name, index, length) {
    const text = index === 0 ? '(верх)' : index === length ? '(низ)' : ''
    return `${name} ${text}`
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
              text={handleTextButton(
                ingredient.name,
                index,
                ingridients.length - 1
              )}
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
  data: PropTypes.arrayOf(PropTypes.shape(ingridientPropTypes)).isRequired,
}
export default BurgerConstructorElements
