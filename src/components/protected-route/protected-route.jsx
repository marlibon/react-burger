import { useEffect, useState } from 'react';
import { getUser } from '../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateAuth } from '../../services/selectors';
import Preloader from '../Preloader/Preloader';

export function ProtectedRouteElement({ element }) {
  const { userData, userRequest } = useSelector(getStateAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, getUser]);

  if (userRequest) {
    return <Preloader />;
  }

  return userData ? element : <Navigate to="/login" replace />;
}
