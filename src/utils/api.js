import { getCookie } from './helpers';
const baseURL = 'https://norma.nomoreparties.space/api';

// Возвращаем объект ответа
const getResponseData = async (res) => {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    return Promise.reject(new Error(data.message || data.error));
  }
};

// Получить данные о тарифе
const getIngredients = async () => {
  const res = await fetch(`${baseURL}/ingredients`);
  return getResponseData(res);
};

// Отправить заказ
const sendIngredients = async (ingredients) => {
  const res = await fetch(`${baseURL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients
    })
  });
  return getResponseData(res);
};

// Восстановить пароль
const forgotPassword = async (email) => {
  const res = await fetch(`${baseURL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
    })
  });
  return getResponseData(res);
};

// Сбросить пароль
const resetPassword = async (password, token) => {
  const res = await fetch(`${baseURL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password,
      token
    })
  });
  return getResponseData(res);
};

// Регистрация
const register = async (email, password, name) => {
  const res = await fetch(`${baseURL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      name
    })
  });
  return getResponseData(res);
};

// Авторизация
const login = async (email, password) => {
  const res = await fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return getResponseData(res);
};

// Обновление токена
const updateToken = async (refreshToken) => {
  const res = await fetch(`${baseURL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: refreshToken
    })
  });
  return getResponseData(res);
};

// Обновление токена
const logout = async (refreshToken) => {
  const res = await fetch(`${baseURL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: refreshToken
    })
  });
  return getResponseData(res);
};

// Получить данные пользователя
const getUser = async (accessToken) => {
  const res = await fetch(`${baseURL}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken
    }
  });
  return getResponseData(res);
};
// Редактировать данные пользователя
const editUser = async (accessToken, email, password, name) => {
  const res = await fetch(`${baseURL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken
    },
    body: JSON.stringify({
      email,
      password,
      name
    })
  });
  return getResponseData(res);
};

const api = {
  getIngredients,
  sendIngredients,
  forgotPassword,
  resetPassword,
  register,
  login,
  updateToken,
  logout,
  getUser,
  editUser
};
export default api;
