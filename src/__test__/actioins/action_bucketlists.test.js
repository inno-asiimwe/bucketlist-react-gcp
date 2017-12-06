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
      const request = moxios.requests.mostRecent();
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
  it('it dispatches delete_bucketlist_REQUEST and delete_bucketlist_SUCCESS', () => {
    const id = 1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const actionsExpected = ['delete_bucketlist_REQUEST', 'delete_bucketlist_SUCCESS'];
    const store = mockStore({});
    return store.dispatch(actions.deleteBucketlist(id)).then(() => {
      const actionsDispatched = store.getActions();
      const actionTypes = actionsDispatched.map(action => action.type);
      expect(actionTypes).toEqual(actionsExpected);
    });
  });
  it('it dispatches get_bucketlist_SUCCESS and get_bucketlist_REQUEST', () => {
    const id = 1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const actionsExpected = ['get_bucketlist_REQUEST', 'get_bucketlist_SUCCESS'];
    const store = mockStore({});
    return store.dispatch(actions.getBucketlist(id)).then(() => {
      const actionsDispatched = store.getActions();
      const actionTypes = actionsDispatched.map(action => action.type);
      expect(actionTypes).toEqual(actionsExpected);
    });
  });
  it('it dispatches edit_bucketlist_REQUEST and edit_bucketlist_SUCCESS', () => {
    const id = 1;
    const data = { name: 'Before 50', description: 'Things to do before 50' };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const actionsExpected = ['edit_bucketlist_REQUEST', 'edit_bucketlist_SUCCESS'];
    const store = mockStore({});
    return store.dispatch(actions.editBucketlist(id, data, () => {})).then(() => {
      const actionsDispatched = store.getActions();
      const actionTypes = actionsDispatched.map(action => action.type);
      expect(actionTypes).toEqual(actionsExpected);
    });
  });
});
