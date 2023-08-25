import styles from './burger-ingredients.module.css'
import clsx from 'clsx'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {useState, useEffect} from 'react'
import BurgerIngredient from './burger-ingredient/burger-ingredient'

const BurgerIngredients = ({data}) => {
  const [current, setCurrent] = useState('')
  const [currentRus, setCurrentRus] = useState('Булки')
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    if (current) {
      setIngredients(data.filter((product) => product.type === current))
    } else {
      setIngredients(data)
      setCurrentRus('')
    }
    if (current === 'bun') {
      setCurrentRus('Булки')
    } else if (current === 'sauce') {
      setCurrentRus('Соусы')
    } else if (current === 'main') {
      setCurrentRus('Начинки')
    }
  }, [current])

  return (
    <section className={clsx(styles.ingridients, 'pt-10')}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <div style={{display: 'flex'}}>
        <Tab
          value='bun'
          active={current === 'bun'}
          onClick={setCurrent}
        >
          Булки
        </Tab>
        <Tab
          value='sauce'
          active={current === 'sauce'}
          onClick={setCurrent}
        >
          Соусы
        </Tab>
        <Tab
          value='main'
          active={current === 'main'}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.table}>
        <h3 className={styles.name_ingridient}>{currentRus}</h3>
        <BurgerIngredient ingredients={ingredients} />
      </div>
    </section>
  )
}
export default BurgerIngredients
