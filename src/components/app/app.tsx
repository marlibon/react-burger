import { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { getIngredients } from '../../services/reducers';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { getStateLoadIngredients } from '../../services/selectors';
import { AnyAction } from 'redux';

function App(): JSX.Element {
  const { preloader } = useSelector(getStateLoadIngredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients() as unknown as AnyAction);
  }, [dispatch]);

  if (preloader) return <Preloader />;
  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
