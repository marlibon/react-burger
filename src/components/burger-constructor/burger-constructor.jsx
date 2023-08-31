import styles from './burger-constructor.module.css'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'
import {ingridientPropTypes} from '../../utils/types'
import PropTypes from 'prop-types'
import {useEffect, useId, useState} from 'react'

const BurgerConstructor = ({data, onOpenModal}) => {
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

  function handleDeleteIngridient(_id) {
    const newArray = ingridients.filter((item) => item._id !== _id)
    setIngredients(newArray)
  }

  function calculateSumTotal() {
    return Array.isArray(ingridients)
      ? ingridients.reduce((acc, item) => {
          return acc + item.price
        }, 0)
      : 0
  }
  return (
    <section className={styles.burger_constructor}>
      <BurgerConstructorElements
        ingridients={ingridients}
        onDelete={handleDeleteIngridient}
      />
      <div className={styles.total}>
        <div className={styles.price_info}>
          <span className={styles.price}>{calculateSumTotal()}</span>
          <div className={styles.currency_icon}>
            <CurrencyIcon type='primary' />
          </div>
        </div>
        <Button
          type='primary'
          size='medium'
          htmlType='button'
          onClick={onOpenModal}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingridientPropTypes)).isRequired,
}
export default BurgerConstructor
