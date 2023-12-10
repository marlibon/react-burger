import { useEffect, useState, ReactNode } from 'react';
import { getUser } from '../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { getStateAuth } from '../../services/selectors';
import { AppDispatch } from '../../services/store';
interface ProtectedRouteElementProps {
  element: ReactNode;
  onlyUnAuth?: boolean;
}

export function ProtectedRouteElement({
  element,
  onlyUnAuth = false
}: ProtectedRouteElementProps) {
  const { userData, userRequest } = useSelector(getStateAuth);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();

  const init = async () => {
    await dispatch(getUser() as unknown as any);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(userData);
    if (!userData) {
      init();
    }
  }, []);

  if (userRequest || (isLoading && !userData)) {
    return <Preloader />;
  }

  if (onlyUnAuth && userData) {
    return <Navigate to="/" replace />;
  }

  if (onlyUnAuth && !userData) {
    return <>{element}</>;
  }

  return userData ? <>{element}</> : <Navigate to="/login" replace />;
}
