import styles from './ingredients-list.module.css';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { Ingredient } from '../../../utils/types';

interface IngredientsListProps {
  ingredients: Ingredient[];
}
const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <ul className={styles.cardList}>
      {ingredients.length &&
        ingredients.map((ingredient) => (
          <BurgerIngredient ingredient={ingredient} key={ingredient._id} />
        ))}
    </ul>
  );
};

export default IngredientsList;
