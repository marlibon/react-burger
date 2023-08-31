export const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
};

const handleResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const loadAllCards = () => {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: getHeaders(),
    }).then(handleResponse);
};
