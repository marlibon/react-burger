export const BASE_URL_GET_INGRDNTS =
  'https://norma.nomoreparties.space/api/ingredients';
export const BASE_URL_CREATE_ORDER =
  'https://norma.nomoreparties.space/api/orders';

const getHeaders = () => {
  return {
    'Content-Type': 'application/json'
  };
};

const handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const loadAllCards = () => {
  return fetch(`${BASE_URL_GET_INGRDNTS}`, {
    method: 'GET'
    // headers: getHeaders(),
  }).then(handleResponse);
};

export const createOrder = (body) => {
  return fetch(`${BASE_URL_CREATE_ORDER}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body)
  }).then(handleResponse);
};
