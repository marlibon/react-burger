import { useState, useEffect, FormEvent } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Input,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUser } from '../../../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './profile-form.module.css';
import { getStateAuth } from '../../../../services/selectors';
import { AppDispatch } from '../../../../services/store';
import { IEmail, IName, IPassword } from '../../../../utils/types';

interface IProfileData extends IName, IEmail, IPassword {}

export const ProfileForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { userData } = useSelector(getStateAuth);
  const [data, setData] = useState<IProfileData>({
    name: '',
    email: '',
    password: ''
  });
  const [buttonsState, setButtonsState] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonsState(true);
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      <Outlet />
      <section className={style.profile}>
        <form className={style.form} onSubmit={handleSubmit}>
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
              icon={'EditIcon'}
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
              icon={'EditIcon'}
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
              icon={'EditIcon'}
            />
          </div>
          {buttonsState && (
            <div className={style.buttons}>
              <div className={style.button}>
                <Button
                  type="primary"
                  htmlType="button"
                  size="medium"
                  onClick={onReset}
                >
                  Отмена
                </Button>
              </div>
              <div className={style.button}>
                <Button htmlType="submit" type="primary" size="medium">
                  Сохранить
                </Button>
              </div>
            </div>
          )}
        </form>
      </section>
    </>
  );
};
