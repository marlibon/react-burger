import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../../services/actions';
import { getStateAuth } from '../../../../services/selectors';
import style from './order-list.module.css';

export const OrderList = () => {
  const { userData, forgotSuccess } = useSelector(getStateAuth);
  return <h1>OrderList</h1>;
};
