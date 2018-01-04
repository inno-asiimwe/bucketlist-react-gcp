/** The redux store */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { middleware } from 'redux-promise-actions';

import reducers from '../reducers';

// Create a redux store using the combined reducer and all the middleware
const store = createStore(
  reducers,
  applyMiddleware(logger, reduxThunk, middleware),
  autoRehydrate()
);
// Persist store to local storage;
persistStore(store);
// Export store as default for use.
export default store;
