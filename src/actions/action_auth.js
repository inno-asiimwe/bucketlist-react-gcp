/** Contains action creators concerned with authentication */
import instance from '../config/axiosConfig';

// Define constants for all the action creator names
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
export const CLEAR_MESSAGES = 'clear';

/**
 * action creator dispatches action to register a new user
 * @param {object} values - details for the new user
 * @param {func} callback - function executed on successful registration
 */
export function registerUser(values, callback) {
  const request = instance.post('/v1/auth/register', values).then(() => callback());
  return {
    type: REGISTER,
    payload: request,
  };
}

/**
 * action creator dispatches action to login a user
 * @param {object} values - username and password
 */
export function loginUser(values) {
  const request = instance.post('/v1/auth/login', values);
  return {
    type: LOGIN,
    payload: request
  };
}

/**
 * action creator dispatches action to logout a user
 */
export function logoutUser() {
  const request = instance.post('/v1/auth/logout');
  return {
    type: LOGOUT,
    payload: request
  };
}

/**
 * action creator dispatches action to clear all messages from the redux store
 */
export function clearMessages() {
  return {
    type: CLEAR_MESSAGES
  };
}
