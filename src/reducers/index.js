import { combineReducers } from 'redux';
import authReducer from './reducer_auth';

const reducers = combineReducers({
    auth: authReducer
});