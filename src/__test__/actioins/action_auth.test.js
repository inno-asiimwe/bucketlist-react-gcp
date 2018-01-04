import React from 'react';
import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { middleware } from 'redux-promise-actions';
import moxios from 'moxios';
import instance from '../../config/axiosConfig';
import * as actions from '../../actions';
import AuthApi from '../../api/authApi';

describe('auth_actions', () => {
  const middlewares = [reduxThunk, middleware];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it('dispatches register_SUCCESS', () => {
    const data = {
      firstname: 'Asiimwe',
      lastname: 'Innocent',
      username: 'inno',
      password: 'pass',
      email: 'asiimwe@test.com'
    };
    const payload = {
      message: 'Successfully registered!',
      status: 'Success'
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: payload
      });
    });
    const actionsExpected = ['register_SUCCESS'];
    const store = mockStore({});
    return store.dispatch(actions.registerUser(data, () => {})).then(() => {
      const actionsDispatched = store.getActions();
      const actionTypes = actionsDispatched.map(action => action.type);
      expect(actionTypes).toEqual(actionsExpected);
    });
  });
  it('dispatches login_SUCCESS', () => {
    const credentials = { username: 'inno', password: 'pass' };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const actionsExpected = ['login_SUCCESS'];
    const store = mockStore({});
    return store.dispatch(actions.loginUser(credentials)).then(() => {
      const actionsDispatched = store.getActions();
      const actionTypes = actionsDispatched.map(action => action.type);
      expect(actionTypes).toEqual(actionsExpected);
    });
  });
  it('dispatches logout_SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const actionsExpected = ['logout_SUCCESS'];
    const store = mockStore({});
    return store.dispatch(actions.logoutUser()).then(() => {
      const actionsDispatched = store.getActions();
      const actionTypes = actionsDispatched.map(action => action.type);
      expect(actionTypes).toEqual(actionsExpected);
    });
  });
});
