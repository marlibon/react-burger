import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useReducer,
  useState,
} from 'react'
import logo from '../../images/logo.svg'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {createOrder, loadAllCards} from '../../utils/fetch'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'
import {DataContext} from '../../context/dataContext'
const initialState = []

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      // проверяем, послед элемент такой же как первый? если да то удаляем его
      let newArray = [...state]
      state.length &&
        state[0].name === state[state.length - 1].name &&
        newArray.pop()
      // добавляем новый элемент в массив
      newArray = [...newArray, action.payload]
      // вставляем в конец такой же элемент как первый
      newArray = [...newArray, newArray[0]]
      return newArray
    case 'DELETE':
      const index = action.payload
      return [...state].filter((item, i) => i !== index)

    default:
      throw new Error(`Не верно указан тип action ${action.type}`)
  }
}

function App() {
  const [data, setData] = useState([])
  const [ingredients, dispatchIngridients] = useReducer(reducer, initialState)
  const [isLoading, setLoading] = useState(true)
  const [ingredient, setIngredient] = useState(null)
  const [isOpenPopupIngridient, setIsOpenPopupIngridient] = useState(false)
  const [isOpenPopupOrder, setIsOpenPopupOrder] = useState(false)
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    order: {number: 0},
  })
  const [isOpenPopupError, setIsOpenPopupError] = useState(false)

  useEffect(() => {
    loadAllCards()
      .then(({data}) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (data.length) {
      const findedBun = data.find((product) => product.type === 'bun')

      if (ingredients.length === 0) {
        // нашли первую попавшуюся булочку, чтобы разместить сверху и снизу
        // добавляем сверху
        dispatchIngridients({
          type: 'ADD',
          payload: findedBun,
        })
      }
    }
  }, [data, ingredients])

  const handleOpenPopupIngridient = useCallback((ingredient) => {
    setIngredient(ingredient)
    setIsOpenPopupIngridient(true)
  }, [])

  const handleOpenPopupOrder = useCallback(() => {
    setLoading(true)
    const order = {ingredients: ingredients.map((item) => item._id)}
    createOrder(order)
      .then((data) => {
        if (data.success) {
          setOrderDetails(data)
          setIsOpenPopupOrder(true)
        } else {
          throw new Error('ошибка отправки данных заказа на сервер')
        }
      })
      .catch((err) => {
        console.log(err)
        setIsOpenPopupError(true)
      })
      .finally(() => setLoading(false))
  }, [ingredients])

  const handleCloseModal = useCallback(() => {
    setIsOpenPopupError(false)
    setIsOpenPopupOrder(false)
    setIsOpenPopupIngridient(false)
    setIngredient(null)
  }, [])

  function handleAddIngridient(ingredient) {
    dispatchIngridients({type: 'ADD', payload: ingredient})
  }
  function handleDeleteIngridient(index) {
    dispatchIngridients({type: 'DELETE', payload: index})
  }

  const calculateSumTotal = useMemo(() => {
    return Array.isArray(ingredients)
      ? ingredients.reduce((acc, item) => {
          return acc + item.price
        }, 0)
      : 0
  }, [ingredients])

  if (isLoading)
    return (
      <div className={styles.page}>
        <h1>Loading...</h1>
      </div>
    )
  return (
    <DataContext.Provider value={{data, ingredients}}>
      <div className={styles.page}>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients
            data={data}
            onOpenModal={handleOpenPopupIngridient}
            onAddIngridientForBurger={handleAddIngridient}
          />
          <BurgerConstructor
            sumTotal={calculateSumTotal}
            onDelete={handleDeleteIngridient}
            onOpenModal={handleOpenPopupOrder}
          />
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
        <OrderDetails orderDetails={orderDetails} />
      </Modal>
      <Modal
        title='Произошла ошибка'
        onClose={handleCloseModal}
        isOpen={isOpenPopupError}
      >
        Произошла ошибка при оформлении заказа. Проверьте интернет-соедининие и
        попробуйте снова.
      </Modal>
    </DataContext.Provider>
  )
}

export default App
