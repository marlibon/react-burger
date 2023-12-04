import style from './register.module.css';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { registerUser } from '../../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';

export const Register = () => {
  const { userData, loader } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    values: data,
    handleChange,
    setValues: setData
  } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(registerUser(data));
    } catch (error) {
      console.error(error);
    } finally {
      setData({
        name: '',
        email: '',
        password: ''
      });
    }
  };

  return (
    <>
      <form className={style.register} onSubmit={handleSubmit}>
        <h2 className={style.title}>Регистрация</h2>
        <div className={style.input}>
          <Input
            type="text"
            placeholder="Имя"
            onChange={handleChange}
            value={data.name}
            name="name"
            error={false}
            errorText="Ошибка"
            size="default"
          />
        </div>
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
          <Button type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>

        <p className={style.caption}>
          Уже зарегистрированы?&nbsp;
          <Link to="/login" className={style.link}>
            Войти
          </Link>
        </p>
      </form>{' '}
    </>
  );
};
