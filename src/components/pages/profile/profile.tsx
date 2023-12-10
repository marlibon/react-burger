import { NavLink, Outlet } from 'react-router-dom';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { logout } from '../../../services/actions';
import { useDispatch } from 'react-redux';
import style from './profile.module.css';
import { AppDispatch } from '../../../services/store';

export const Profile = () => {
  const dispatch: AppDispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <section className={style.profile}>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li>
              <NavLink className={style.link} to="/profile">
                Профиль
              </NavLink>
            </li>
            <li>
              <NavLink className={style.link} to="/profile/orders">
                История заказов
              </NavLink>
            </li>
            <li>
              <Button
                htmlType="button"
                type="secondary"
                size="large"
                className={style.button}
                onClick={onLogout}
              >
                Выход
              </Button>
            </li>
          </ul>
          <p className={style.caption}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </nav>
        <Outlet />
      </section>
    </>
  );
};
