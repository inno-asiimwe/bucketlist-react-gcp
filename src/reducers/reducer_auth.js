import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_PENDING } from '../actions/action_auth';

const initialState = {
  Authenticated: false,
  loading: false,
  response: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_PENDING:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, response: action.payload.data };
    case REGISTER_ERROR:
      return { ...state, response: action.payload.response.data };
    default:
      return state;
  }
}
