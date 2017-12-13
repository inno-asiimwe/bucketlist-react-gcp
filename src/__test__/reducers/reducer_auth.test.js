import reducer, { initialState } from '../../reducers/reducer_auth';

describe('Auth Reducers', () => {
  it('it updates state on succesful registration', () => {
    expect(reducer(initialState, {
      type: 'register_SUCCESS',
      payload: { data: { message: 'Successfully registered', status: 'success' } }
    })).toEqual({
      ...initialState,
      response: { message: 'Successfully registered', status: 'success' },
      loading: false,
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
      response: { message: 'Failed', status: 'Failed' }
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
      payload: { data: { auth_token: 'token' } }
    })).toEqual({
      ...initialState,
      loaded: true,
      loading: false,
      Authenticated: true,
      token: 'token',
      response: { auth_token: 'token' }
    });
  });
  it('it updates state on login error', () => {
    expect(reducer(initialState, {
      type: 'login_ERROR',
      payload: { response: { data: { } } }
    })).toEqual({
      ...initialState,
      loading: false,
    });
  });
  it('it updates state on logout request', () => {
    expect(reducer(initialState, {
      type: 'logout_REQUEST',
    })).toEqual({
      ...initialState,
      loading: true
    });
  });
  it('it updates state on logout SUCCESS', () => {
    expect(reducer(initialState, {
      type: 'logout_SUCCESS',
      payload: { data: { message: 'Successfully logged out', status: 'Success' } }
    })).toEqual({
      ...initialState,
      response: { message: 'Successfully logged out', status: 'Success' },
      loading: false,
      token: ''
    });
  });
  it('it updates state on logout ERROR', () => {
    expect(reducer(initialState, {
      type: 'logout_ERROR',
      payload: { response: { data: { message: 'Failed to logout', status: 'Failed' } } }
    })).toEqual({
      ...initialState,
      response: { message: 'Failed to logout', status: 'Failed' }
    });
  });
});
