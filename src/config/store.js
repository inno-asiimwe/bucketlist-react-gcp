import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { middleware } from 'redux-promise-actions';

import reducers from '../reducers';
import bucketlistReducer from '../reducers/reducer_bucketlist';

const store = createStore(
  reducers,
  applyMiddleware(logger, reduxThunk, middleware),
  autoRehydrate()
);
persistStore(store);
export default store;
