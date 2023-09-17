import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {
  const { ingredientForModal } = useSelector((store) => store.burger);

  return (
    ingredientForModal && (
      <div className={styles.ingridient}>
        <img
          src={ingredientForModal.image}
          alt={ingredientForModal.name}
          className={styles.image}
        />
        <p className={styles.name}>{ingredientForModal.name}</p>
        <ul className={styles.energy_value}>
          <li className={styles.item}>
            <p className={styles.energy_text}>Калории,ккал</p>
            <p className={styles.value}>{ingredientForModal.calories}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Белки, г</p>
            <p className={styles.value}>{ingredientForModal.proteins}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Жиры, г</p>
            <p className={styles.value}>{ingredientForModal.fat}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.energy_text}>Углеводы, г</p>
            <p className={styles.value}>{ingredientForModal.carbohydrates}</p>
          </li>
        </ul>
      </div>
    )
  );
};

export default IngredientDetails;
