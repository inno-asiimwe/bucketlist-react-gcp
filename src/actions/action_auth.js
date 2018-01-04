/** Contains action creators concerned with authentication */
import AuthApi from '../api/authApi';

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
  return async (dispatch) => {
    await AuthApi.registerUserApi(values)
      .then((resp) => {
        dispatch({ type: REGISTER_SUCCESS, payload: resp });
        dispatch(() => callback());
      })
      .catch((err) => {
        dispatch({ type: REGISTER_ERROR, payload: err });
      });
  };
}

/**
 * action creator dispatches action to login a user
 * @param {object} values - username and password
 */
export function loginUser(values) {
  return async (dispatch) => {
    await AuthApi.loginUserApi(values)
      .then((resp) => {
        dispatch({ type: LOGIN_SUCCESS, payload: resp });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
}

/**
 * action creator dispatches action to logout a user
 */
export function logoutUser() {
  return async (dispatch) => {
    await AuthApi.logoutUserApi()
      .then((resp) => {
        dispatch({ type: LOGOUT_SUCCESS, payload: resp });
      })
      .catch((err) => {
        dispatch({ type: LOGOUT_ERROR, payload: err });
      });
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
