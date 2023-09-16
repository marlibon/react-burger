import React, {
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react'
import styles from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { getIngredients } from '../../services/actions/burger-ingredients'
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../Preloader/Preloader'

// function reducer(state, action) {
//   switch (action.type) {
//     case 'ADD':
//       // проверяем, послед элемент такой же как первый? если да то удаляем его
//       let newArray = [...state]
//       state.length &&
//         state[0].name === state[state.length - 1].name &&
//         newArray.pop()
//       // добавляем новый элемент в массив
//       newArray = [...newArray, action.payload]
//       // вставляем в конец такой же элемент как первый
//       newArray = [...newArray, newArray[0]]
//       return newArray
//     case 'DELETE':
//       const index = action.payload
//       return [...state].filter((item, i) => i !== index)

//     default:
//       throw new Error(`Не верно указан тип action ${action.type}`)
//   }
// }

function App() {
  const { preloader } = useSelector(store => store.ingredients)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [])

  // useEffect(() => {
  //   if (data.length) {
  //     const findedBun = data.find((product) => product.type === 'bun')

  //     if (ingredients.length === 0) {
  //       // нашли первую попавшуюся булочку, чтобы разместить сверху и снизу
  //       // добавляем сверху
  //       dispatchIngridients({
  //         type: 'ADD',
  //         payload: findedBun,
  //       })
  //     }
  //   }
  // }, [data, ingredients])

  // const handleOpenPopupIngridient = useCallback((ingredient) => {
  //   setIngredient(ingredient)
  //   setIsOpenPopupIngridient(true)
  // }, [])

  // const handleOpenPopupOrder = useCallback(() => {
  //   setLoading(true)
  //   const order = {ingredients: ingredients.map((item) => item._id)}
  //   createOrder(order)
  //     .then((data) => {
  //       if (data.success) {
  //         setOrderDetails(data)
  //         setIsOpenPopupOrder(true)
  //       } else {
  //         throw new Error('ошибка отправки данных заказа на сервер')
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setIsOpenPopupError(true)
  //     })
  //     .finally(() => setLoading(false))
  // }, [ingredients])



  if (preloader)
    return (
      <Preloader />
    )
  return (
    <>
      <div className={styles.page}>
        <AppHeader />
        <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
          </DndProvider>
        </main>
      </div>
      {/* <Modal
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
      </Modal> */}
      </>
  )
}

export default App
