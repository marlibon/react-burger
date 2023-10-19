import { useState, useEffect } from 'react';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUser, logout } from '../../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './profile.module.css';

export const Profile = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((store) => store.auth);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [buttonsState, setButtonsState] = useState(false);

  const handleChange = (e) => {
    setButtonsState(true);
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUser(data));
    } catch (error) {
      console.error(error);
    } finally {
      setButtonsState(false);
    }
  };
  const onReset = () => {
    if (userData) {
      const { name, email } = userData;
      setData({
        name,
        email,
        password: ''
      });
    }
    setButtonsState(false);
  };
  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (userData) {
      const { name, email } = userData;
      setData({
        name,
        email,
        password: ''
      });
    }
  }, [userData]);
  return (
    <>
      <section className={style.profile}>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li>
              <NavLink className={style.link} exact to="/profile">
                Профиль
              </NavLink>
            </li>
            <li>
              <NavLink className={style.link} to="/profile/orders">
                История заказов
              </NavLink>
            </li>
            <li>
              <button
                type="secondary"
                size="large"
                className={style.button}
                onClick={onLogout}
              >
                Выход
              </button>
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
