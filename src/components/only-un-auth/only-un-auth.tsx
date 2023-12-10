import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateAuth } from '../../services/selectors';

interface OnlyUnAuthRouteProps {
  element: JSX.Element;
}

const OnlyUnAuthRoute: FC<OnlyUnAuthRouteProps> = ({ element }) => {
  const { userData } = useSelector(getStateAuth);

  return userData ? <Navigate to={'/'} replace /> : element;
};

export default OnlyUnAuthRoute;
