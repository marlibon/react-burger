import HeaderButton from './header-button/header-button';
import styles from './app-header.module.css';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';
const AppHeader: React.FC = () => {
  const pathname = useLocation().pathname;
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink to="/">
          <HeaderButton text="Конструктор">
            <BurgerIcon type="primary" />
          </HeaderButton>
        </NavLink>
        <NavLink to="/feed">
          <HeaderButton text="Лента заказов">
            <ListIcon type="secondary" />
          </HeaderButton>
        </NavLink>
      </nav>
      <Logo />
      <NavLink to="/profile">
        <HeaderButton
          text="Личный кабинет"
          otherStyles={{ width: 'fit-content', justifySelf: 'right' }}
        >
          <ProfileIcon type="secondary" />
        </HeaderButton>
      </NavLink>
    </header>
  );
};
export default AppHeader;
