import styles from './burger-ingredients.module.css'
import clsx from 'clsx'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {useState, useRef, useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BurgerIngredient from './burger-ingredient/burger-ingredient'
import {ingridientPropTypes} from '../../utils/types'
import PropTypes from 'prop-types'
import { closeIngredientModal, switсhTab } from '../../services/reducers/burger-ingredients';
import IngredientsList from './ingredients-list/ingredients-list';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

const BurgerIngredients = ({}) => {
  const dispatch = useDispatch()
  const { ingredients, currentTab, ingredientModal } = useSelector(store => store.ingredients)

  const refBuns = useRef()
  const refSauces = useRef()
  const refMain = useRef()
  const buns = ingredients?.filter((product) => product.type === 'bun')
  const sauces = ingredients?.filter((product) => product.type === 'sauce')
  const main = ingredients?.filter((product) => product.type === 'main')

  const onClickTabElement = useCallback(
    (tab) => {
      dispatch(switсhTab(tab))

      const goTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'})
      }

      tab === 'bun' && goTo(refBuns)
      tab === 'sauce' && goTo(refSauces)
      tab === 'main' && goTo(refMain)
    },
    [refBuns, refSauces, refMain]
  )

  const handleCloseModal = () => {
    dispatch(closeIngredientModal())
  }

  return (
    <>
    <section className={clsx(styles.ingredients, 'pt-10')}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab
          value='bun'
          active={currentTab === 'bun'}
          onClick={onClickTabElement}
        >
          Булки
        </Tab>
        <Tab
          value='sauce'
          active={currentTab === 'sauce'}
          onClick={onClickTabElement}
        >
          Соусы
        </Tab>
        <Tab
          value='main'
          active={currentTab === 'main'}
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
        <IngredientsList
        ingredients={buns}
        />
        <h3
          className={styles.name_ingridient}
          id='sauce'
          ref={refSauces}
        >
          Соусы
        </h3>
        <IngredientsList
        ingredients={sauces}
        />
        <h3
          className={styles.name_ingridient}
          id='main'
          ref={refMain}
        >
          Начинки
        </h3>
        <IngredientsList
        ingredients={main}
        />
      </div>
    </section>

    {ingredientModal &&
      <Modal onClose={handleCloseModal} title='Детали ингредиента'>
         <IngredientDetails/>
      </Modal>
    }
  </>  
  )
}

BurgerIngredients.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  onAddIngridientForBurger: PropTypes.func.isRequired,
}

export default BurgerIngredients
