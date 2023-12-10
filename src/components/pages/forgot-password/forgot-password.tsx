import React, { FormEvent } from 'react';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../services/actions';
import { getStateAuth } from '../../../services/selectors';
import { useForm } from '../../../hooks/useForm';
import style from './forgot-password.module.css';
import { AppDispatch } from '../../../services/store';

export const ForgotPassword: React.FC = () => {
  const { forgotSuccess } = useSelector(getStateAuth);
  const dispatch: AppDispatch = useDispatch();
  const { values, handleChange, setValues } = useForm({
    email: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(forgotPassword(values as { email: any }));
    } catch (error) {
      console.error(error);
    } finally {
      setValues({
        email: ''
      });
    }
  };

  if (forgotSuccess) {
    return <Navigate to="/reset-password" replace />;
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
            value={values.email}
            name="email"
            error={false}
            errorText="Ошибка"
            size="default"
          />
        </div>
        {values.email && (
          <div className={style.button}>
            <Button htmlType="submit" type="primary" size="medium">
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
