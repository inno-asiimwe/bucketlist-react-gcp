import instance from '../config/axiosConfig';

export const REGISTER = 'register';
export const REGISTER_SUCCESS = 'register_SUCCESS';
export const REGISTER_ERROR = 'register_ERROR';
export const REGISTER_PENDING = 'register_REQUEST';
export const LOGIN = 'login';
export const LOGIN_PENDING = 'login_REQUEST';
export const LOGIN_SUCCESS = 'login_SUCCESS';
export const LOGIN_ERROR = 'login_ERROR';
export const LOGOUT = 'logout';
export const LOGOUT_PENDING = 'logout_REQUEST';
export const LOGOUT_SUCCESS = 'logout_SUCCESS';
export const LOGOUT_ERROR = 'logout_ERROR';

export function registerUser(values) {
  const request = instance.post('/v1/auth/register', values);
  return {
    type: REGISTER,
    payload: request
  };
}
export function loginUser(values) {
  const request = instance.post('/v1/auth/login', values);
  return {
    type: LOGIN,
    payload: request
  };
}
export function logoutUser() {
  const request = instance.post('/v1/auth/logout');
  return {
    type: LOGOUT,
    payload: request
  };
}
