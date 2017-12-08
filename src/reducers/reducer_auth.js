import { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_PENDING, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_ERROR, LOGOUT_PENDING, LOGOUT_SUCCESS } from '../actions/action_auth';

export const initialState = {
  Authenticated: false,
  loading: false,
  token: '',
  response: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        response: action.payload.data,
        loading: false,
        loaded: true
      };
    case REGISTER_ERROR:
      return { ...state, response: action.payload.response.data };
    case LOGIN_PENDING:
      return { ...state, loading: true };
    case LOGIN_ERROR:
      return { ...state, response: action.payload.response.data, loading: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        response: action.payload.data,
        Authenticated: true,
        loading: false,
        loaded: true,
        token: action.payload.data.auth_token
      };
    case LOGOUT_PENDING:
      return { ...state, loading: true };
    case LOGOUT_ERROR:
      return { ...state, response: action.payload.response.data, loading: false };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        response: action.payload.data,
        Authenticated: false,
        loading: false,
        token: ''
      };
    default:
      return state;
  }
};
