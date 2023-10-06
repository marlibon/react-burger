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
import Preloader from '../Preloader/Preloader';
import { getStateLoadIngredients } from '../../services/selectors';
import Main from '../main/main';
import Login from '../pages/login/login';
import NotFound from '../pages/not-found/not-found';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { Register } from '../pages/register/register';
import { Profile } from '../pages/profile/profile';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { ProtectedRouteElement } from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { IngredientsPage } from '../pages/ingredients-page/ingredients-page';

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
            <ProtectedRouteElement authedAccess={true} element={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRouteElement authedAccess={true} element={<Register />} />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRouteElement
              authedAccess={true}
              element={<ForgotPassword />}
            />
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/ingredients/:id" element={<IngredientsPage />} />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<Profile />} />}
        />
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
                  <Modal>
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
