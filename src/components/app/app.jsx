import React from 'react'
import logo from '../../images/logo.svg'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {data} from '../../utils/data'

function App() {
  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor />
      </main>
    </div>
  )
}

export default App
