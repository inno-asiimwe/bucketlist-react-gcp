import React from 'react';
import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { middleware } from 'redux-promise-actions';
import moxios from 'moxios';
import instance from '../../config/axiosConfig';
import * as actions from '../../actions';

describe('bucketlist_actions', () => {
  const middlewares = [reduxThunk, middleware];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it('it dispatches get_bucketlist_REQUEST and get_bucketlist_SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const actionsExpected = ['get_bucketlists_REQUEST', 'get_bucketlists_SUCCESS'];
    const store = mockStore({});
    return store.dispatch(actions.getBucketlists()).then(() => {
      const actionsDispatched = store.getActions();
      const actionTypes = actionsDispatched.map(action => action.type);
      expect(actionTypes).toEqual(actionsExpected);
    });
  });
  it('it dispatches add_bucketlist_REQUEST and add_bucketlist_SUCCESS', () => {
    const data = {
      name: 'Before 60',
      description: 'Things to do before I am 60'
    };
    moxios.wait(() => {
      const request = moxios.request s.mostRecent();
      request.respondWith({
        status: 201
      });
    });
    const actionsExpected = ['add_bucketlist_REQUEST', 'add_bucketlist_SUCCESS'];
    const store = mockStore({});
    return store.dispatch(actions.addBucketlist(data, () => {})).then(() => {
      const actionsDispatched = store.getActions();
      const actionTypes = actionsDispatched.map(action => action.type);
      expect(actionTypes).toEqual(actionsExpected);
    });
  });
});
