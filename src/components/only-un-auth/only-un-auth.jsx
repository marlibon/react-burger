import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateAuth } from '../../services/selectors';
import PropTypes from 'prop-types';

const OnlyUnAuthRoute = ({ element }) => {
  const { userData } = useSelector(getStateAuth);

  return userData ? <Navigate to={'/'} replace /> : element;
};

export default OnlyUnAuthRoute;
OnlyUnAuthRoute.propTypes = {
  element: PropTypes.node.isRequired
};
