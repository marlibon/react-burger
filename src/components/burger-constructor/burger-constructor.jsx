import styles from './burger-constructor.module.css';
import {
  Button,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDrop } from 'react-dnd';

import DragAndDropContainer from '../drag-drop-container/drag-drop-container';
import { getStateInterface, getStateOrder } from '../../services/selectors';
import {
  addIngredient,
  clearCart,
  closeOrderModal,
  closeOrderModalError,
  openOrderModal,
  openOrderModalError,
  sendOrderFailed,
  sendOrderRequest,
  sendOrderSuccess
} from '../../services/actions';
import { createOrder } from '../../utils/fetch';

const BurgerConstructor = () => {
  const { cart } = useSelector(getStateOrder);
  const { isOpenOrderModal, isOpenOrderErrorModal } =
    useSelector(getStateInterface);
  const dispatch = useDispatch();

  const sumTotal = useMemo(() => {
    return (
      cart.main.reduce((acc, item) => {
        return acc + item.price;
      }, 0) + (cart.bun?.price * 2 || 0)
    );
  }, [cart]);

  const handleCloseModal = () => {
    dispatch(closeOrderModal());
  };
  const handleCloseModalError = () => {
    dispatch(closeOrderModalError());
  };

  const sendOrder = (idList) => {
    return async (dispatch) => {
      dispatch(sendOrderRequest());
      try {
        const res = await createOrder({ ingredients: idList });
        dispatch(sendOrderSuccess(res));
        dispatch(openOrderModal());
        dispatch(clearCart());
      } catch (error) {
        dispatch(sendOrderFailed());
        dispatch(openOrderModalError());
        console.error(error);
      }
    };
  };

  const handleOpenModal = () => {
    const ids = cart.main.map((item) => item._id);
    dispatch(sendOrder([cart.bun._id, ...ids, cart.bun._id]));
  };
  const checkValidOrder = () => {
    return cart.main.length > 0 && cart.bun;
  };
  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver()
    }),
    drop(ingredient) {
      dispatch(addIngredient({ ingredient }));
    }
  });
  return (
    <>
      <section className={styles.burger_constructor}>
        {cart.main.length || cart.bun ? (
          <>
            <BurgerConstructorElements />
            <div className={styles.total}>
              <div className={styles.price_info}>
                <span className={styles.price}>{sumTotal}</span>
                <div className={styles.currency_icon}>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
              <Button
                type="primary"
                size="medium"
                htmlType="button"
                onClick={handleOpenModal}
                disabled={!checkValidOrder()}
              >
                Оформить заказ
              </Button>
            </div>
          </>
        ) : (
          <DragAndDropContainer
            text="Переместите булку"
            target={dropTarget}
            onHover={isHover}
          />
        )}
      </section>
      {isOpenOrderModal && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
      {isOpenOrderErrorModal && (
        <Modal onClose={handleCloseModalError}>
          Произошла ошибка при оформлении заказа. Проверьте интернет-соедининие
          и попробуйте снова.
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
