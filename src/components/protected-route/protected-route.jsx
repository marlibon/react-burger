import { useEffect, useState } from 'react';
import { getUser } from '../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function ProtectedRouteElement({ element }) {
  const [isUserLoaded, setUserLoaded] = useState(false);
  const { userData } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const init = async () => {
    if (!userData) {
      await dispatch(getUser());
      setUserLoaded(true);
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return isUserLoaded ? element : <Navigate to="/login" replace />;
}
