import React from 'react';
import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { middleware } from 'redux-promise-actions';
import moxios from 'moxios';
import instance from '../../config/axiosConfig';
import * as actions from '../../actions';

describe('auth_actions', () => {
  const middlewares = [reduxThunk, middleware];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
});
