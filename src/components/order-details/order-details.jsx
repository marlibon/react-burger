import styles from './order-details.module.css'
import image from '../../images/done.png'
import PropTypes from 'prop-types'

const OrderDetails = ({orderDetails}) => {
  return (
    <div className={styles.order}>
      <h4 className={styles.order_number}>{orderDetails.order.number}</h4>
      <p className={styles.order_number_text}>идентификатор заказа</p>
      <img
        className={styles.image}
        src={image}
        alt='done'
      />
      <p className={styles.description}>
        Ваш заказ ({orderDetails.name}) начали готовить
      </p>
      <p className={styles.subdescription}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

OrderDetails.propTypes = {
  orderDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    order: PropTypes.shape({
      number: PropTypes.number.isRequired,
    }).isRequired,
  }),
}
export default OrderDetails
