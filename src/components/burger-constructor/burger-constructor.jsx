import styles from './burger-constructor.module.css'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'
import {useContext, useEffect, useId, useMemo, useState} from 'react'
import {DataContext} from '../../context/dataContext'
import PropTypes from 'prop-types'

const BurgerConstructor = ({sumTotal, onOpenModal, onDelete}) => {
  const {ingredients} = useContext(DataContext)

  return (
    <section className={styles.burger_constructor}>
      <BurgerConstructorElements
        ingredients={ingredients}
        onDelete={onDelete}
      />
      <div className={styles.total}>
        <div className={styles.price_info}>
          <span className={styles.price}>{sumTotal}</span>
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
  sumTotal: PropTypes.number.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default BurgerConstructor
