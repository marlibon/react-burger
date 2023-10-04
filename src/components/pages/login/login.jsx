import style from './login.module.css';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../services/actions';
import { useSelector } from 'react-redux';
import ModalOverlay from '../../modal/overlay/overlay';

const Login = () => {
  const { userData, loader } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
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
      dispatch(loginUser(data));
    } catch (error) {
      console.error(error);
    } finally {
      setData({
        email: '',
        password: ''
      });
    }
  };

  if (userData) {
    navigate(location?.state?.from || '/');
  }

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
          <Button type="primary" size="medium">
            Войти
          </Button>
        </div>

        <p className={style.caption}>
          Вы — новый пользователь?&nbsp;
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
