import style from './forgot-password.module.css';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../services/actions';
import { getStateAuth } from '../../../services/selectors';
import { useForm } from '../../../hooks/useForm';

export const ForgotPassword = () => {
  const { userData, forgotSuccess } = useSelector(getStateAuth);
  const location = useLocation();
  const dispatch = useDispatch();
  const { values, handleChange, setValues } = useForm({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(forgotPassword(values));
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
