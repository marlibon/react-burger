import React, {useCallback, useEffect, useState} from 'react'
import logo from '../../images/logo.svg'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {loadAllCards} from '../../utils/fetch'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'
import {DataContext} from '../../context/dataContext'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [ingredient, setIngredient] = useState(null)
  const [isOpenPopupIngridient, setIsOpenPopupIngridient] = useState(false)
  const [isOpenPopupOrder, setIsOpenPopupOrder] = useState(false)

  useEffect(() => {
    loadAllCards()
      .then(({data}) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  const handleOpenPopupIngridient = useCallback((ingredient) => {
    setIngredient(ingredient)
    setIsOpenPopupIngridient(true)
  }, [])

  const handleOpenPopupOrder = useCallback(() => {
    setIsOpenPopupOrder(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpenPopupOrder(false)
    setIsOpenPopupIngridient(false)
    setIngredient(null)
  }, [])

  if (isLoading)
    return (
      <div className={styles.page}>
        <h1>Loading...</h1>
      </div>
    )
  return (
    <DataContext.Provider value={{data}}>
      <div className={styles.page}>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients
            data={data}
            onOpenModal={handleOpenPopupIngridient}
          />
          <BurgerConstructor onOpenModal={handleOpenPopupOrder} />
        </main>
      </div>
      <Modal
        onClose={handleCloseModal}
        isOpen={isOpenPopupIngridient}
        title='Детали ингредиента'
      >
        {ingredient && <IngredientDetails selectedIngridient={ingredient} />}
      </Modal>

      <Modal
        onClose={handleCloseModal}
        isOpen={isOpenPopupOrder}
      >
        <OrderDetails />
      </Modal>
    </DataContext.Provider>
  )
}

export default App
