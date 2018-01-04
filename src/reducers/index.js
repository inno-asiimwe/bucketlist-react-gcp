import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_auth';
import bucketlistReducer from './reducer_bucketlist';

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  bucketlists: bucketlistReducer
});

export default reducers;
