import reducer, { initialState } from '../../reducers/reducer_auth';

describe('Auth Reducers', () => {
  it('it updates state on succesful registration', () => {
    expect(reducer(initialState, {
      type: 'register_SUCCESS',
      payload: { data: { message: 'Successfully registered', status: 'success' } }
    })).toEqual({
      ...initialState,
      response: {},
      loading: false,
      success: true,
      loaded: true
    });
  });
  it('it updates state on registration request', () => {
    expect(reducer(initialState, {
      type: 'register_REQUEST'
    })).toEqual({
      ...initialState,
      loading: true
    });
  });
  it('it updates state on registration error', () => {
    expect(reducer(initialState, {
      type: 'register_ERROR',
      payload: { response: { data: { message: 'Failed', status: 'Failed' } } }
    })).toEqual({
      ...initialState,
      response: { message: 'Failed', status: 'Failed' },
      loading: false,
      error: true,
      loaded: true,
      success: false,
      success_msg: null,
      error_msg: 'Failed'
    });
  });
  it('it updates state on login request', () => {
    expect(reducer(initialState, {
      type: 'login_REQUEST',
    })).toEqual({
      ...initialState,
      loading: true
    });
  });
  it('it updates state on login success', () => {
    expect(reducer(initialState, {
      type: 'login_SUCCESS',
      payload: { data: { auth_token: 'token', message: 'Success' } }
    })).toEqual({
      ...initialState,
      Authenticated: true,
      loading: false,
      loaded: true,
      success: true,
      error: false,
      error_msg: null,
      success_msg: 'Success',
      token: 'token',
      response: { auth_token: 'token', message: 'Success' }
    });
  });
  it('it updates state on login error', () => {
    expect(reducer(initialState, {
      type: 'login_ERROR',
      payload: { response: { data: { message: 'Error' } } }
    })).toEqual({
      ...initialState,
      response: { response: { data: { message: 'Error' } } },
      loading: false,
      loaded: true,
      success: false,
      error: true,
      error_msg: 'Error',
      success_msg: null
    });
  });
  it('it updates state on logout request', () => {
    expect(reducer(initialState, {
      type: 'logout_REQUEST',
    })).toEqual({
      ...initialState,
      loading: true,
      loaded: false,
      success: false,
      error: false,
      success_msg: null,
      error_msg: null
    });
  });
  it('it updates state on logout SUCCESS', () => {
    expect(reducer(initialState, {
      type: 'logout_SUCCESS',
      payload: { data: { message: 'Successfully logged out', status: 'Success' } }
    })).toEqual({
      ...initialState,
      response: {},
      Authenticated: false,
      loading: false,
      loaded: true,
      error: false,
      success: true,
      error_msg: null,
      success_msg: null,
      token: ''
    });
  });
  it('it updates state on logout ERROR', () => {
    expect(reducer(initialState, {
      type: 'logout_ERROR',
      payload: { response: { data: { message: 'Failed to logout', status: 'Failed' } } }
    })).toEqual({
      ...initialState,
      response: { response: { data: { message: 'Failed to logout', status: 'Failed' } } },
      loading: false,
      loaded: true,
      error: true,
      success: false,
      success_msg: null,
      error_msg: null
    });
  });
});
