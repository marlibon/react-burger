import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { getIngredients } from '../../services/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { getStateLoadIngredients } from '../../services/selectors';

import Main from '../main/main';
import Preloader from '../Preloader/Preloader';
import Login from '../pages/login/login';
import NotFound from '../pages/not-found/not-found';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

import { Register } from '../pages/register/register';
import { Profile } from '../pages/profile/profile';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { ProtectedRouteElement } from '../protected-route/protected-route';
import { IngredientsPage } from '../pages/ingredients-page/ingredients-page';
import { OrderList } from '../pages/profile/order-list/order-list';
import { ProfileForm } from '../pages/profile/profile-form/profile-form';

function App() {
  const { preloader } = useSelector(getStateLoadIngredients);
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  if (preloader) return <Preloader />;
  return (
    <div className={styles.page}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            <ProtectedRouteElement onlyUnAuth={true} element={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRouteElement onlyUnAuth={true} element={<Register />} />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRouteElement
              onlyUnAuth={true}
              element={<ForgotPassword />}
            />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRouteElement
              onlyUnAuth={true}
              element={<ResetPassword />}
            />
          }
        />
        <Route path="/ingredients/:id" element={<IngredientsPage />} />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<Profile />} />}
        >
          <Route
            path=""
            element={<ProtectedRouteElement element={<ProfileForm />} />}
          />
          <Route
            path="orders"
            element={<ProtectedRouteElement element={<OrderList />} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal title={'Детали ингредиента'} onClose={() => navigate('/')}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path="/order"
            element={
              <ProtectedRouteElement
                background={background}
                element={
                  <Modal onClose={() => navigate('/')}>
                    <OrderDetails />
                  </Modal>
                }
              />
            }
          />
        </Routes>
      )}{' '}
    </div>
  );
}

export default App;
