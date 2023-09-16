import styles from './ingredient-details.module.css'
import { useSelector } from 'react-redux';

const IngredientDetails = () => {
  const { ingredient } = useSelector(store => store.ingredients)

  return (
    ingredient && (
      <div className={styles.ingridient}>
        <img
          src={ingredient.image}
          alt={ingredient.name}
          className={styles.image}
        />
        <p className={styles.name}>{ingredient.name}</p>
        <ul className={styles.energy_value}>
          <li className={styles.item}>
            <p className={styles.energy_text}>Калории,ккал</p>
            <p className={styles.value}>{ingredient.calories}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Белки, г</p>
            <p className={styles.value}>{ingredient.proteins}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Жиры, г</p>
            <p className={styles.value}>{ingredient.fat}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Углеводы, г</p>
            <p className={styles.value}>{ingredient.carbohydrates}</p>
          </li>
        </ul>
      </div>
    )
  )
}

export default IngredientDetails
