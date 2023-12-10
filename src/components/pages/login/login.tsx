import style from './login.module.css';
import React, { FormEvent } from 'react';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../services/actions';
import { useForm } from '../../../hooks/useForm';
import { AppDispatch } from '../../../services/store';

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    values: data,
    handleChange,
    setValues: setData
  } = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(loginUser(data as { email: any; password: any }));
    } catch (error) {
      console.error(error);
    } finally {
      setData({
        email: '',
        password: ''
      });
    }
  };

  return (
    <>
      <form className={style.login} onSubmit={handleSubmit}>
        <h2 className={style.title}>Вход</h2>
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
        <div className={style.input}>
          <Input
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            value={data.password}
            name="password"
            error={false}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <div className={style.button}>
          <Button htmlType="submit" type="primary" size="medium">
            Войти
          </Button>
        </div>

        <p className={style.caption}>
          Вы — новый пользователь?&nbsp;
          <Link to="/register" className={style.link}>
            Зарегистрироваться
          </Link>
        </p>

        <p className={style.caption}>
          Забыли пароль?&nbsp;
          <Link to="/forgot-password" className={style.link}>
            Восстановить пароль
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
