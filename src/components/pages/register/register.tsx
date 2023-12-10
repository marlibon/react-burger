import style from './register.module.css';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { registerUser } from '../../../services/actions';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { AppDispatch } from '../../../services/store';

export const Register: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    values: data,
    handleChange,
    setValues: setData
  } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(registerUser(data as { email: any; password: any; name: any }));
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
          <Button type="primary" size="medium" htmlType="submit">
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
