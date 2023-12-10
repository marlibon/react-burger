import React from 'react';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import styles from './ingredients-page.module.css';

export const IngredientsPage: React.FC = () => {
  return (
    <section className={styles.ingredientsPageWraper}>
      <span className={`${styles.label} text text text_type_main-large mb-7`}>
        Детали ингредиента
      </span>
      <IngredientDetails />
    </section>
  );
};
