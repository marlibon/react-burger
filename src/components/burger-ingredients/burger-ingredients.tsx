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
import { TTab } from '../../utils/types';

const BurgerIngredients: React.FC = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(getStateLoadIngredients);
  const { currentTab, isOpenIngredientModal } = useSelector(getStateInterface);

  const refContainer = useRef<HTMLDivElement>(null);
  const refBuns = useRef<HTMLDivElement>(null);
  const refSauces = useRef<HTMLDivElement>(null);
  const refMain = useRef<HTMLDivElement>(null);
  const buns = ingredients?.filter((product) => product.type === 'bun');
  const sauces = ingredients?.filter((product) => product.type === 'sauce');
  const main = ingredients?.filter((product) => product.type === 'main');

  const onClickTabElement = useCallback(
    (tab: TTab | string) => {
      dispatch(switсhTab(tab));

      const goTo = (element: HTMLElement) => {
        console.log(element);
        element?.scrollIntoView({ behavior: 'smooth' });
      };
      tab === TTab.bun && refBuns.current && goTo(refBuns.current);
      tab === TTab.sauce && refSauces.current && goTo(refSauces.current);
      tab === TTab.main && refMain.current && goTo(refMain.current);
    },
    [refBuns, refSauces, refMain, dispatch]
  );

  useEffect(() => {
    const handleScroll = () => {
      const titles = [refBuns.current, refSauces.current, refMain.current];
      const finded = titles.find((item) => {
        const rect = item ? item.getBoundingClientRect() : null;
        if (
          rect &&
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        ) {
          return true;
        }
        return false;
      });
      if (finded && finded?.id !== currentTab) {
        dispatch(switсhTab(finded.id as TTab));
      }
    };

    //@ts-ignore
    refContainer.current.addEventListener('scroll', handleScroll);
    return () => {
      if (refContainer.current) {
        //@ts-ignore
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
            active={currentTab === TTab.bun}
            onClick={onClickTabElement}
          >
            Булки
          </Tab>
          <Tab
            value="sauce"
            active={currentTab === TTab.sauce}
            onClick={onClickTabElement}
          >
            Соусы
          </Tab>
          <Tab
            value="main"
            active={currentTab === TTab.main}
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
