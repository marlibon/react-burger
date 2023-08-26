import styles from './burger-ingredients.module.css'
import clsx from 'clsx'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {useState, useEffect} from 'react'
import BurgerIngredient from './burger-ingredient/burger-ingredient'
import {ingridientPropTypes} from '../../utils/types'
import PropTypes from 'prop-types'

const BurgerIngredients = ({data}) => {
  const [current, setCurrent] = useState('')

  const buns = data.filter((product) => product.type === 'bun')
  const sauces = data.filter((product) => product.type === 'sauce')
  const main = data.filter((product) => product.type === 'main')

  function onClickTabElement(tab) {
    setCurrent(tab)
    const element = document.getElementById(tab)
    if (element) element.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section className={clsx(styles.ingridients, 'pt-10')}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab
          value='bun'
          active={current === 'bun'}
          onClick={onClickTabElement}
        >
          Булки
        </Tab>
        <Tab
          value='sauce'
          active={current === 'sauce'}
          onClick={onClickTabElement}
        >
          Соусы
        </Tab>
        <Tab
          value='main'
          active={current === 'main'}
          onClick={onClickTabElement}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.table}>
        <h3
          className={styles.name_ingridient}
          id='bun'
        >
          Булки
        </h3>
        <BurgerIngredient ingredients={buns} />
        <h3
          className={styles.name_ingridient}
          id='sauce'
        >
          Соусы
        </h3>
        <BurgerIngredient ingredients={sauces} />
        <h3
          className={styles.name_ingridient}
          id='main'
        >
          Начинки
        </h3>
        <BurgerIngredient ingredients={main} />
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingridientPropTypes)).isRequired,
}

export default BurgerIngredients
