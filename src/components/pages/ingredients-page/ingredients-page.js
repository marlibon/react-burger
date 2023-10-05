import IngredientDetails from '../../ingredient-details/ingredient-details';
import ingredientsPageStyles from './ingredients-page.module.css';

export const IngredientsPage = () => {
  return (
    <section className={ingredientsPageStyles.ingredientsPageWraper}>
      <span
        className={`${ingredientsPageStyles.label} text text text_type_main-large mb-7`}
      >
        Детали ингредиента
      </span>
      <IngredientDetails />
    </section>
  );
};
