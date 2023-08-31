import styles from './order-details.module.css'
import image from '../../images/done.png'

const OrderDetails = () => {
  return (
    <div className={styles.order}>
      <h4 className={styles.order_number}>034536</h4>
      <p className={styles.order_number_text}>идентификатор заказа</p>
      <img
        className={styles.image}
        src={image}
        alt='done'
      />
      <p className={styles.description}>Ваш заказ начали готовить</p>
      <p className={styles.subdescription}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

export default OrderDetails
