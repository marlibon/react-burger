import React, {useEffect, useState} from 'react'
import logo from '../../images/logo.svg'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {loadAllCards} from '../../utils/fetch'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    loadAllCards()
      .then(({data}) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  if (isLoading)
    return (
      <div className={styles.page}>
        <h1>Loading...</h1>
      </div>
    )
  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  )
}

export default App
