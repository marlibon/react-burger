import styles from './burger-ingredients.module.css';
import clsx from 'clsx';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeIngredientModal, switсhTab } from '../../services/actions';
import IngredientsList from './ingredients-list/ingredients-list';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {
  getStateLoadIngredients,
  getStateInterface
} from '../../services/selectors';

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(getStateLoadIngredients);
  const { currentTab, isOpenIngredientModal } = useSelector(getStateInterface);

  const refContainer = useRef();
  const refBuns = useRef();
  const refSauces = useRef();
  const refMain = useRef();
  const buns = ingredients?.filter((product) => product.type === 'bun');
  const sauces = ingredients?.filter((product) => product.type === 'sauce');
  const main = ingredients?.filter((product) => product.type === 'main');

  const onClickTabElement = useCallback(
    (tab) => {
      dispatch(switсhTab(tab));

      const goTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

      tab === 'bun' && goTo(refBuns);
      tab === 'sauce' && goTo(refSauces);
      tab === 'main' && goTo(refMain);
    },
    [refBuns, refSauces, refMain, dispatch]
  );

  useEffect(() => {
    const handleScroll = () => {
      const titles = [refBuns.current, refSauces.current, refMain.current];
      const finded = titles.find((item) => {
        const rect = item.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        ) {
          return true;
        }
      });
      finded && finded.id !== currentTab && dispatch(switсhTab(finded.id));
    };

    refContainer.current.addEventListener('scroll', handleScroll);
    return () => {
      if (refContainer.current) {
        refContainer.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentTab, dispatch]);

  const handleCloseModal = () => {
    dispatch(closeIngredientModal());
  };

  return (
    <>
      <section className={clsx(styles.ingredients, 'pt-10')}>
        <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
        <div className={styles.tabs}>
          <Tab
            value="bun"
            active={currentTab === 'bun'}
            onClick={onClickTabElement}
          >
            Булки
          </Tab>
          <Tab
            value="sauce"
            active={currentTab === 'sauce'}
            onClick={onClickTabElement}
          >
            Соусы
          </Tab>
          <Tab
            value="main"
            active={currentTab === 'main'}
            onClick={onClickTabElement}
          >
            Начинки
          </Tab>
        </div>
        <div className={styles.table} ref={refContainer}>
          <h3 className={styles.name_ingridient} id="bun" ref={refBuns}>
            Булки
          </h3>
          <IngredientsList ingredients={buns} />
          <h3 className={styles.name_ingridient} id="sauce" ref={refSauces}>
            Соусы
          </h3>
          <IngredientsList ingredients={sauces} />
          <h3 className={styles.name_ingridient} id="main" ref={refMain}>
            Начинки
          </h3>
          <IngredientsList ingredients={main} />
        </div>
      </section>

      {isOpenIngredientModal && (
        <Modal onClose={handleCloseModal} title="Детали ингредиента">
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
