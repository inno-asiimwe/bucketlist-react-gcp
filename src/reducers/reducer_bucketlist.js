import _ from 'lodash';
import { GET_BUCKETLISTS_SUCCESS, DELETE_BUCKETLIST_SUCCESS } from '../actions/action_bucketlist';

export default function (state = [], action) {
  switch (action.type) {
    case GET_BUCKETLISTS_SUCCESS:
      return _.mapKeys(action.payload.data, 'id');
    case DELETE_BUCKETLIST_SUCCESS:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

