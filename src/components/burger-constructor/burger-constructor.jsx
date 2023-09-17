import styles from './burger-constructor.module.css';
import {
  Button,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorElements from './burger-constructor-elements/burger-constructor-elements';
import { useEffect, useId, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDrop } from 'react-dnd';
import {
  addIngredient,
  closeIngredientModal,
  closeOrderModal,
  closeOrderModalError
} from '../../services/reducers/burger';
import { sendOrder } from '../../services/actions/burger';
import DragAndDropContainer from '../drag-drop-container/drag-drop-container';

const BurgerConstructor = () => {
  const { cart, isOpenOrderModal, isOpenOrderErrorModal } = useSelector(
    (store) => store.burger
  );
  const dispatch = useDispatch();

  const sumTotal = useMemo(() => {
    return Array.isArray(cart)
      ? cart.reduce((acc, item) => {
          return acc + item.price;
        }, 0)
      : 0;
  }, [cart]);

  const handleCloseModal = () => {
    dispatch(closeOrderModal());
  };
  const handleCloseModalError = () => {
    dispatch(closeOrderModalError());
  };

  const handleOpenModal = () => {
    const ids = cart.map((item) => item._id);
    dispatch(sendOrder(ids));
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'bun',
    collect: (monitor) => ({
      isHover: monitor.isOver()
    }),
    drop(ingredient) {
      const uid = uuid();
      dispatch(addIngredient({ ...ingredient, uid }));
    }
  });
  return (
    <>
      <section className={styles.burger_constructor}>
        {cart.length ? (
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
BurgerConstructor.propTypes = {
  // sumTotal: PropTypes.number.isRequired,
  // onOpenModal: PropTypes.func.isRequired,
};
export default BurgerConstructor;
