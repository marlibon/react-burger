import styles from './burger-constructor.module.css'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'

const BurgerConstructor = ({data}) => {
  return (
    <section className={styles.burgerConstructor}>
      <BurgerConstructorElements data={data} />
      <div className={styles.total}>
        <div className={styles.price_info}>
          <span className={styles.price}>610</span>
          <div className={styles.currencyIcon}>
            <CurrencyIcon type='primary' />
          </div>
        </div>
        <Button
          type='primary'
          size='medium'
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor
