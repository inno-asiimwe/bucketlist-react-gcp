import { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_PENDING, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_ERROR, LOGOUT_PENDING, LOGOUT_SUCCESS, CLEAR_MESSAGES } from '../actions/action_auth';

export const initialState = {
  Authenticated: false,
  loading: false,
  loaded: true,
  token: '',
  response: {},
  error: false,
  success: false,
  error_msg: null,
  success_msg: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_MESSAGES:
      return {
        ...state,
        error: false,
        success: false,
        error_msg: null,
        success_msg: null
      };
    case REGISTER_PENDING:
      return {
        ...state,
        loading: true,
        response: {},
        error: false,
        success: false,
        error_msg: null,
        success_msg: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        response: {},
        loading: false,
        loaded: true,
        success: true,
        error_msg: null,
        success_msg: null
      };
    case REGISTER_ERROR:
      return {
        ...state,
        response: action.payload.response.data,
        loading: false,
        error: true,
        loaded: true,
        success: false,
        success_msg: null,
        error_msg: action.payload.response.data.message
      };
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        response: {},
        error: false,
        success: false,
        error_msg: null,
        success_msg: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        response: action.payload,
        loading: false,
        loaded: true,
        success: false,
        error: true,
        error_msg: action.payload.response.data.message,
        success_msg: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        response: action.payload.data,
        Authenticated: true,
        loading: false,
        loaded: true,
        success: true,
        error: false,
        error_msg: null,
        success_msg: action.payload.data.message,
        token: action.payload.data.auth_token
      };
    case LOGOUT_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
        success: false,
        error: false,
        success_msg: null,
        error_msg: null
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        response: action.payload,
        loading: false,
        loaded: true,
        error: true,
        success: false,
        success_msg: null,
        error_msg: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        response: {},
        Authenticated: false,
        loading: false,
        loaded: true,
        error: false,
        success: true,
        error_msg: null,
        success_msg: null,
        token: ''
      };
    default:
      return state;
  }
};
