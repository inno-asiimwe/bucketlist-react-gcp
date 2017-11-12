import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { middleware } from 'redux-promise-actions';

import reducers from '../reducers';

const store = createStore(
  reducers,
  applyMiddleware(logger, reduxThunk, middleware)
);

export default store;
