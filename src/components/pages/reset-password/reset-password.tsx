import style from './reset-password.module.css';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate } from 'react-router-dom';
import { resetPassword } from '../../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getStateAuth } from '../../../services/selectors';
import { useForm } from '../../../hooks/useForm';
import { AppDispatch } from '../../../services/store';

export const ResetPassword = () => {
  const { forgotSuccess, resetSuccess } = useSelector(getStateAuth);

  const dispatch: AppDispatch = useDispatch();
  const {
    values: data,
    handleChange,
    setValues: setData
  } = useForm({
    password: '',
    token: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(resetPassword(data as { password: any; token: any }));
    } catch (error) {
      console.error(error);
    } finally {
      setData({
        password: '',
        token: ''
      });
    }
  };

  if (!forgotSuccess) {
    return <Navigate to="/forgot-password" replace />;
  }
  if (resetSuccess) {
    return <Navigate to="/login" replace />;
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
            type="text"
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
            <Button type="primary" size="medium" htmlType="submit">
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
