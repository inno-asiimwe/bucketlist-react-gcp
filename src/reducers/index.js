import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_auth';

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer
});

export default reducers;
