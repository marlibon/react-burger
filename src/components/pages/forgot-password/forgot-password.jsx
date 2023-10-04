import style from './forgot-password.module.css';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../services/actions';

export const ForgotPassword = () => {
  const { loader, userData, forgotSuccess } = useSelector(
    (store) => store.auth
  );
  const location = useLocation();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(forgotPassword(data));
    } catch (error) {
      console.error(error);
    } finally {
      setData({
        email: ''
      });
    }
  };

  if (userData) {
    return redirect(location?.state?.from || '/');
  }

  if (forgotSuccess) {
    return redirect('/reset-password');
  }

  return (
    <>
      <form className={style.forgotPassword} onSubmit={handleSubmit}>
        <h2 className={style.title}>Восстановление пароля</h2>
        <div className={style.input}>
          <Input
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={data.email}
            name="email"
            error={false}
            errorText="Ошибка"
            size="default"
          />
        </div>
        {data.email && (
          <div className={style.button}>
            <Button type="primary" size="medium">
              Восстановить
            </Button>
          </div>
        )}

        <p className={style.caption}>
          Вспомнили пароль?&nbsp;
          <Link to="/login" className={style.link}>
            Войти
          </Link>
        </p>
      </form>
    </>
  );
};
