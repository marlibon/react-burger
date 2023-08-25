import HeaderButton from './header-button/header-button'
import styles from './app-header.module.css'
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <HeaderButton
          text='Конструктор'
          active={true}
        >
          <BurgerIcon type='primary' />
        </HeaderButton>
        <HeaderButton
          text='Лента заказов'
          active={false}
        >
          <ListIcon type='secondary' />
        </HeaderButton>
      </nav>
      <Logo />
      <HeaderButton
        text='Личный кабинет'
        active={false}
        otherStyles={{width: 'fit-content', justifySelf: 'right'}}
      >
        <ProfileIcon type='secondary' />
      </HeaderButton>
    </header>
  )
}
export default AppHeader
