import styles from './burger-constructor.module.css'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements'
import {ingredientsPropTypes} from '../../utils/types'
import PropTypes from 'prop-types'

const BurgerConstructor = ({data}) => {
  return (
    <section className={styles.burger_constructor}>
      <BurgerConstructorElements data={data} />
      <div className={styles.total}>
        <div className={styles.price_info}>
          <span className={styles.price}>610</span>
          <div className={styles.currency_icon}>
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

BurgerConstructor.propTypes = {
  data: ingredientsPropTypes.isRequired,
}
export default BurgerConstructor
