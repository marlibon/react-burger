import api from '../../utils/api';
import {
  getRegisterRequest,
  getRegisterSuccess,
  getRegisterFailed,
  getLoginRequest,
  getLoginSuccess,
  getLoginFailed,
  getUserRequest,
  getUserSuccess,
  getUserFailed,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailed,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailed,
  logoutRequest,
  logoutSuccess,
  logoutFailed,
  enableLoader,
  disableLoader,
  disableReset
} from '../reducers/auth';
import { setCookie, getCookie, deleteCookie } from '../../utils/helpers';

export const updateToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (refreshToken) {
    try {
      const res = await api.updateToken(refreshToken);
      deleteCookie('accessToken');
      localStorage.removeItem('refreshToken');

      setCookie('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
    } catch (error) {
      console.error(error);
    }
  }
};

export const registerUser = ({ email, password, name }) => {
  return async (dispatch) => {
    dispatch(enableLoader());
    dispatch(getRegisterRequest());
    try {
      const res = await api.register(email, password, name);
      dispatch(getRegisterSuccess(res.user));
      setCookie('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
    } catch (error) {
      dispatch(getRegisterFailed());
      console.error(error);
    } finally {
      dispatch(disableLoader());
    }
  };
};

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(enableLoader());
    dispatch(getLoginRequest());
    try {
      const res = await api.login(email, password);
      console.log(res);
      dispatch(getLoginSuccess(res.user));
      setCookie('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
    } catch (error) {
      dispatch(getLoginFailed());
      console.error(error);
    } finally {
      dispatch(disableLoader());
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch(getUserRequest());

    const accessToken = getCookie('accessToken');
    if (accessToken) {
      try {
        const res = await api.getUser(accessToken);
        dispatch(getUserSuccess(res.user));
      } catch (error) {
        if (error.message === 'jwt expired') {
          console.log(error, '123');
          updateToken();
          dispatch(getUser());
        } else {
          dispatch(getUserFailed());
          console.error(error);
        }
      }
    }
  };
};
export const updateUser = ({ email, password, name }) => {
  return async (dispatch) => {
    dispatch(enableLoader());
    dispatch(updateUserRequest());

    const accessToken = getCookie('accessToken');
    if (accessToken) {
      try {
        const res = await api.editUser(accessToken, email, password, name);
        dispatch(updateUserSuccess(res.user));
      } catch (error) {
        if (error.message === 'jwt expired') {
          updateToken();
          dispatch(updateUser());
        } else {
          dispatch(updateUserFailed());
          console.error(error);
        }
      } finally {
        dispatch(disableLoader());
      }
    }
  };
};
export const forgotPassword = ({ email }) => {
  return async (dispatch) => {
    dispatch(enableLoader());
    dispatch(forgotPasswordRequest());
    try {
      const res = await api.forgotPassword(email);
      dispatch(forgotPasswordSuccess(res.message));
    } catch (error) {
      dispatch(forgotPasswordFailed());
      console.error(error);
    } finally {
      dispatch(disableLoader());
    }
  };
};

export const resetPassword = ({ password, token }) => {
  return async (dispatch) => {
    dispatch(enableLoader());
    dispatch(forgotPasswordRequest());
    try {
      const res = await api.resetPassword(password, token);
      dispatch(forgotPasswordSuccess(res.message));
    } catch (error) {
      dispatch(forgotPasswordFailed());
      console.error(error);
    } finally {
      dispatch(disableLoader());
      dispatch(disableReset());
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    dispatch(enableLoader());
    dispatch(logoutRequest());

    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        const res = await api.logout(refreshToken);
        dispatch(logoutSuccess(res.message));
        deleteCookie('accessToken');
        localStorage.removeItem('refreshToken');
      } catch (error) {
        dispatch(logoutFailed());
        console.error(error);
      } finally {
        dispatch(disableLoader());
      }
    } else {
      console.error('Error logout');
    }
  };
};