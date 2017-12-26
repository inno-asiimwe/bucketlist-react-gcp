import _ from 'lodash';
import {
  GET_BUCKETLISTS_SUCCESS,
  DELETE_BUCKETLIST_SUCCESS,
  GET_BUCKETLIST_SUCCESS,
  DELETE_BUCKETLIST_ITEM_SUCCESS,
  SEARCH_BUCKETLISTS_SUCCESS,
  GET_BUCKETLIST_ITEMS_SUCCESS
} from '../actions/action_bucketlist';

export const initialState = { currentpage: 1 };
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BUCKETLISTS_SUCCESS:
      return {
        items: _.mapKeys(action.payload.data.items, 'id'),
        totalpages: action.payload.data.pages,
        currentpage: action.payload.data.current_page,
        nextpage: action.payload.data.next_page,
        prevpage: action.payload.data.prev_page,
        has_next: action.payload.data.has_next,
        has_prev: action.payload.data.has_prev
      };
    case SEARCH_BUCKETLISTS_SUCCESS:
      return {
        items: _.mapKeys(action.payload.data.items, 'id'),
        totalpages: action.payload.data.pages,
        currentpage: action.payload.data.current_page,
        nextpage: action.payload.data.next_page,
        prevpage: action.payload.data.prev_page,
        has_next: action.payload.data.has_next,
        has_prev: action.payload.data.has_prev
      };
    case DELETE_BUCKETLIST_SUCCESS:
      return state;
    case GET_BUCKETLIST_SUCCESS:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data,
        current: action.payload.data
      };
    case GET_BUCKETLIST_ITEMS_SUCCESS:
      return {
        items: _.mapKeys(action.payload.data.items, 'id'),
        totalpages: action.payload.data.pages,
        currentpage: action.payload.data.current_page,
        nextpage: action.payload.data.next_page,
        prevpage: action.payload.data.prev_page,
        bucketlist: action.payload.data.bucketlist,
        has_next: action.payload.data.has_next,
        has_prev: action.payload.data.has_prev
      };
    case DELETE_BUCKETLIST_ITEM_SUCCESS:
      return state;
    default:
      return state;
  }
};

