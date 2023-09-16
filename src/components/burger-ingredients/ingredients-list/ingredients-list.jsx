import styles from './ingredients-list.module.css'
import PropTypes from 'prop-types';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { ingridientPropTypes } from '../../../utils/types';

const IngredientsList = ({ ingredients }) => {

  return (
      <ul className={styles.cardList}>
        {ingredients.length && ingredients.map((ingredient) => (
          <BurgerIngredient ingredient={ingredient} key={ingredient._id} />
  ))}
      </ul>
  )
}

IngredientsList.propTypes = {
  ingredients: ingridientPropTypes.isRequired,
};

export default IngredientsList
