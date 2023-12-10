import { useSelector } from 'react-redux';
import { getStateAuth } from '../../../../services/selectors';
import style from './order-list.module.css';

export const OrderList: React.FC = () => {
  const { userData, forgotSuccess } = useSelector(getStateAuth);
  return <h1>OrderList</h1>;
};
