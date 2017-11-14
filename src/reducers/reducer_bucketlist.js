import _ from 'lodash';
import { GET_BUCKETLISTS_PENDING, GET_BUCKETLISTS_SUCCESS, GET_BUCKETLISTS_ERROR} from '../actions/action_bucketlist';

export default function (state = [], action) {
  switch (action.type) {
    case GET_BUCKETLISTS_SUCCESS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

