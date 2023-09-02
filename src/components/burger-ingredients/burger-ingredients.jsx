import styles from './burger-ingredients.module.css'
import clsx from 'clsx'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {useState, useRef, useContext, useCallback} from 'react'
import BurgerIngredient from './burger-ingredient/burger-ingredient'
import {ingridientPropTypes} from '../../utils/types'
import PropTypes from 'prop-types'
import {DataContext} from '../../context/dataContext'

const BurgerIngredients = ({onOpenModal}) => {
  const {data} = useContext(DataContext)
  const [current, setCurrent] = useState('')
  const refBuns = useRef()
  const refSauces = useRef()
  const refMain = useRef()
  const buns = data?.filter((product) => product.type === 'bun')
  const sauces = data?.filter((product) => product.type === 'sauce')
  const main = data?.filter((product) => product.type === 'main')

  const onClickTabElement = useCallback(
    (tab) => {
      setCurrent(tab)

      const goTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'})
      }

      tab === 'bun' && goTo(refBuns)
      tab === 'sauce' && goTo(refSauces)
      tab === 'main' && goTo(refMain)
    },
    [refBuns, refSauces, refMain]
  )

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
          ref={refBuns}
        >
          Булки
        </h3>
        <BurgerIngredient
          ingredients={buns}
          onOpenModal={onOpenModal}
        />
        <h3
          className={styles.name_ingridient}
          id='sauce'
          ref={refSauces}
        >
          Соусы
        </h3>
        <BurgerIngredient
          ingredients={sauces}
          onOpenModal={onOpenModal}
        />
        <h3
          className={styles.name_ingridient}
          id='main'
          ref={refMain}
        >
          Начинки
        </h3>
        <BurgerIngredient
          ingredients={main}
          onOpenModal={onOpenModal}
        />
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingridientPropTypes)).isRequired,
  onOpenModal: PropTypes.func.isRequired,
}

export default BurgerIngredients
