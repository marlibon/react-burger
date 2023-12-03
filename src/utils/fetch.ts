export const BASE_URL_GET_INGRDNTS: string =
  'https://norma.nomoreparties.space/api/ingredients';
export const BASE_URL_CREATE_ORDER: string =
  'https://norma.nomoreparties.space/api/orders';

const getHeaders = (): Record<string, string> => {
  return {
    'Content-Type': 'application/json'
  };
};

const handleResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const loadAllCards = (): Promise<any> => {
  return fetch(`${BASE_URL_GET_INGRDNTS}`, {
    method: 'GET'
    // headers: getHeaders(),
  }).then(handleResponse);
};

export const createOrder = (body: Record<string, any>): Promise<any> => {
  return fetch(`${BASE_URL_CREATE_ORDER}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body)
  }).then(handleResponse);
};
