import { useEffect, useState } from 'react';
import { getUser } from '../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import {
  getStateAuth,
  getStateLoadIngredients
} from '../../services/selectors';
import Preloader from '../Preloader/Preloader';

export function ProtectedRouteElement({ element, authedAccess = false }) {
  const { userData, userRequest } = useSelector(getStateAuth);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  const init = async () => {
    await dispatch(getUser());
    setIsLoading(false);
  };
  useEffect(() => {
    !userData && init();
  }, []);

  if (userRequest || (isLoading && !userData)) {
    return <Preloader />;
  }

  if (authedAccess && userData) {
    userData && <Navigate to="/" replace />;
  }

  if (authedAccess && !userData) {
    return element;
  }

  return userData ? element : <Navigate to="/login" replace />;
}
