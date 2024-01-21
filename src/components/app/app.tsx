import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { getIngredients } from '../../services/reducers';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { getStateLoadIngredients } from '../../services/selectors';
import { AnyAction } from 'redux';
import Main from '../main/main';
import Login from '../pages/login/login';
import NotFound from '../pages/not-found/not-found';
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
import { AppDispatch } from '../../services/store';
import { Orders } from '../pages/orders/orders';
import ModalOrderDetail from '../modal-order-detail/modal-order-detail';
import { OrderDetailPage } from '../pages/order-detail-page/order-detail-page';
import { Feeds } from '../pages/feeds/feeds';
import { FeedDetailPage } from '../pages/feed-detail-page/feed-detail-page';
import { ModalFeedDetail } from '../modal-feed-detail/modal-feed-detail';
import { activeConnection, getCookie } from '../../utils/helpers';
import { LIVE_TABLE_USER_SERVER_URL } from '../../services/constants';
import { wsConnect, wsDisconnect } from '../../services/reducers/ws-orders';

function App(): JSX.Element {
  const { preloader } = useSelector(getStateLoadIngredients);
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  useEffect(() => {
    const accessToken = getCookie('accessToken')?.replace('Bearer ', '');

    if (accessToken && !activeConnection.has(LIVE_TABLE_USER_SERVER_URL)) {
      dispatch(wsConnect(`${LIVE_TABLE_USER_SERVER_URL}?token=${accessToken}`));
      activeConnection.add(LIVE_TABLE_USER_SERVER_URL);
    }
    return () => {
      dispatch(wsDisconnect());
      activeConnection.delete(LIVE_TABLE_USER_SERVER_URL);
    };
  }, []);
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
        <Route path="/feed" element={<Feeds />}></Route>
        <Route path="/feed/:id" element={<FeedDetailPage />}></Route>

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
            element={<ProtectedRouteElement element={<Orders />} />}
          />
          <Route
            path="orders/:id"
            element={<ProtectedRouteElement element={<OrderDetailPage />} />}
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
                //@ts-ignore
                background={background}
                element={
                  <Modal onClose={() => navigate('/')}>
                    <OrderDetails />
                  </Modal>
                }
              />
            }
          />
          <Route path="/feed/:id" element={<ModalFeedDetail />} />
          <Route path="/profile/orders/:id" element={<ModalOrderDetail />} />
        </Routes>
      )}{' '}
    </div>
  );
}

export default App;
