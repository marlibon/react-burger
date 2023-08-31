import styles from './ingredient-details.module.css'
import {ingridientPropTypes} from '../../utils/types'
import PropTypes from 'prop-types'

const IngredientDetails = ({selectedIngridient}) => {
  return (
    selectedIngridient && (
      <div className={styles.ingridient}>
        <img
          src={selectedIngridient.image}
          alt={selectedIngridient.name}
          className={styles.image}
        />
        <p className={styles.name}>{selectedIngridient.name}</p>
        <ul className={styles.energy_value}>
          <li className={styles.item}>
            <p className={styles.energy_text}>Калории,ккал</p>
            <p className={styles.value}>{selectedIngridient.calories}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Белки, г</p>
            <p className={styles.value}>{selectedIngridient.proteins}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Жиры, г</p>
            <p className={styles.value}>{selectedIngridient.fat}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Углеводы, г</p>
            <p className={styles.value}>{selectedIngridient.carbohydrates}</p>
          </li>
        </ul>
      </div>
    )
  )
}

IngredientDetails.propTypes = {
  selectedIngridient: PropTypes.shape(ingridientPropTypes),
}

export default IngredientDetails
