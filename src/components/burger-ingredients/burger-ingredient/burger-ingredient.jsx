import styles from './burger-ingredient.module.css'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {ingridientPropTypes} from '../../../utils/types'
import PropTypes from 'prop-types'

const BurgerIngredient = ({ingredients}) => {
  return (
    <ul className={styles.list}>
      {ingredients.map((i) => (
        <li
          className={styles.ingridient}
          key={i._id}
        >
          <img
            src={i.image}
            alt={i.name}
            className={styles.image}
          />
          <div className={styles.price}>
            <span>{i.price}</span>
            <CurrencyIcon type='primary' />
          </div>
          <p className={styles.title}>{i.name}</p>
        </li>
      ))}
    </ul>
  )
}
BurgerIngredient.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(ingridientPropTypes))
    .isRequired,
}
export default BurgerIngredient
