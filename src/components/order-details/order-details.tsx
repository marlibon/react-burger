import styles from './order-details.module.css';
import image from '../../images/done.png';
import { useSelector } from 'react-redux';
import { getStateSendOrder } from '../../services/selectors';

const OrderDetails: React.FC = () => {
  const { order } = useSelector(getStateSendOrder);
  if (!order) {
    return null;
  }
  return (
    <div className={styles.order}>
      <h4 className={styles.order_number}>{order.order.number}</h4>
      <p className={styles.order_number_text}>идентификатор заказа</p>
      <img className={styles.image} src={image} alt="done" />
      <p className={styles.description}>
        Ваш заказ ({order.name}) начали готовить
      </p>
      <p className={styles.subdescription}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
