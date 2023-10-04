import style from './reset-password.module.css';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { resetPassword } from '../../../services/actions';
import { useDispatch, useSelector } from 'react-redux';

export const ResetPassword = () => {
  const { loader, userData, forgotSuccess } = useSelector(
    (store) => store.auth
  );

  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: '',
    token: ''
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
      dispatch(resetPassword(data));
      history.replace('/login');
    } catch (error) {
      console.error(error);
    } finally {
      setData({
        password: '',
        token: ''
      });
    }
  };

  if (userData) {
    navigate(location?.state?.from || '/');
  }

  if (!forgotSuccess) {
    navigate('/forgot-password');
  }

  return (
    <>
      <form className={style.resetPassword} onSubmit={handleSubmit}>
        <h2 className={style.title}>Восстановление пароля</h2>
        <div className={style.input}>
          <Input
            type="password"
            placeholder="Введите новый пароль"
            onChange={handleChange}
            value={data.password}
            name="password"
            error={false}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <div className={style.input}>
          <Input
            type="token"
            placeholder="Введите код из письма"
            onChange={handleChange}
            value={data.token}
            name="token"
            error={false}
            errorText="Ошибка"
            size="default"
          />
        </div>
        {data.password && data.token && (
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
      </form>{' '}
    </>
  );
};
