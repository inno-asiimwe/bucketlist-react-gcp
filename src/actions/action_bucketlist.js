/** Contains action creators concerned with the bucketlists */
import instance from '../config/axiosConfig';
import BucketlistApi from '../api/bucketlistApi';

// Define constants for all the action creator names
export const GET_BUCKETLISTS = 'get_bucketlists';
export const GET_BUCKETLISTS_PENDING = 'get_bucketlists_REQUEST';
export const GET_BUCKETLISTS_SUCCESS = 'get_bucketlists_SUCCESS';
export const GET_BUCKETLISTS_ERROR = 'get_bucketlists_ERROR';
export const ADD_BUCKETLIST = 'add_bucketlist';
export const ADD_BUCKETLIST_SUCCESS = 'add_bucketlist_SUCCESS';
export const ADD_BUCKETLIST_PENDING = 'add_bucketlist_REQUEST';
export const ADD_BUCKETLIST_ERROR = 'add_bucketlist_ERROR';
export const DELETE_BUCKETLIST = 'delete_bucketlist';
export const DELETE_BUCKETLIST_SUCCESS = 'delete_bucketlist_SUCCESS';
export const DELETE_BUCKETLIST_PENDING = 'delete_bucketlist_REQUEST';
export const DELETE_BUCKETLIST_ERROR = 'delete_bucketlist_ERROR';
export const GET_BUCKETLIST = 'get_bucketlist';
export const GET_BUCKETLIST_SUCCESS = 'get_bucketlist_SUCCESS';
export const GET_BUCKETLIST_ERROR = 'get_bucketlist_ERROR';
export const EDIT_BUCKETLIST = 'edit_bucketlist';
export const EDIT_BUCKETLIST_SUCCESS = 'edit_bucketlist_SUCCESS';
export const EDIT_BUCKETLIST_ERROR = 'edit_bucketlist_ERROR';
export const ADD_BUCKETLIST_ITEM = 'add_bucketlist_item';
export const ADD_BUCKETLIST_ITEM_SUCCESS = 'add_bucketlist_item_SUCCESS';
export const DELETE_BUCKETLIST_ITEM = 'delete_bucketlist_item';
export const DELETE_BUCKETLIST_ITEM_SUCCESS = 'delete_bucketlist_item_SUCCESS';
export const DELETE_BUCKETLIST_ITEM_ERROR = 'delete_bucketlist_item_ERROR';
export const EDIT_BUCKETLIST_ITEM = 'edit_bucketlist_item';
export const EDIT_BUCKETLIST_ITEM_SUCCESS = 'edit_bucketlist_item_SUCCESS';
export const EDIT_BUCKETLIST_ITEM_ERROR = 'edit_bucketlist_item_ERROR';
export const SEARCH_BUCKETLISTS = 'search_bucketlists';
export const SEARCH_BUCKETLISTS_SUCCESS = 'search_bucketlists_SUCCESS';
export const SEARCH_BUCKETLISTS_ERROR = 'search_bucketlists_ERROR';
export const GET_BUCKETLIST_ITEMS = 'get_bucketlist_items';
export const GET_BUCKETLIST_ITEMS_SUCCESS = 'get_bucketlist_items_SUCCESS';
export const GET_BUCKETLIST_ITEMS_ERROR = 'get_bucketlist_items_ERROR';
export const GET_BUCKETLIST_ITEMS_PENDING = 'get_bucketlist_items_REQUEST';
export const SEARCH_BUCKETLIST_ITEMS = 'get_bucketlist_items';
export const SEARCH_BUCKETLIST_ITEMS_SUCCESS = 'get_bucketlist_items_SUCCESS';
export const SEARCH_BUCKETLIST_ITEMS_ERROR = 'get_bucketlist_items_ERROR';

/**
 * action creator for fetching  bucketlists from the API
 * @param {number} page - The page to fetch
 */
export function getBucketlists(page) {
  return (dispatch) => {
    BucketlistApi.getAllBucketlists(page)
      .then((resp) => {
        dispatch({ type: GET_BUCKETLISTS_SUCCESS, payload: resp });
      })
      .catch((err) => {
        dispatch({ type: GET_BUCKETLISTS_ERROR, payload: err });
      });
  };
}

/**
 * action creator adds a new bucketlist
 * @param {object} values - Includes name and description
 * @param {func} callback - function to be called on success of the action
 * @param {func} errorHandler - function to be called on failure of the action
 */
export function addBucketlist(values, callback, errorHandler) {
  return (dispatch) => {
    BucketlistApi.addBucketlistApi(values)
      .then((resp) => {
        dispatch({ type: ADD_BUCKETLIST_SUCCESS, payload: resp });
        dispatch(() => callback());
      })
      .catch((err) => {
        dispatch({ type: ADD_BUCKETLIST_ERROR, payload: err });
        dispatch(() => errorHandler());
      });
  };
}

/**
 * action creator dispatches action to delete a given bucketlist
 * @param {number} id - id of the bucketlist to be deleted
 * @param {func} callback - function executed on successful deletion of bucketlist
 */
export function deleteBucketlist(id, callback) {
  return (dispatch) => {
    BucketlistApi.deleteBucketlistApi(id)
      .then((resp) => {
        dispatch({ type: DELETE_BUCKETLIST_SUCCESS, payload: resp });
        dispatch(() => callback());
      })
      .catch((err) => {
        dispatch({ type: DELETE_BUCKETLIST_ERROR, payload: err });
      });
  };
}

/**
 * Action creator dispatches action to fetch a single bucketlist
 * @param {number} id - id of the bucketlist to fetch
 */
export function getBucketlist(id) {
  return (dispatch) => {
    BucketlistApi.getSingleBucketlist(id)
      .then((resp) => {
        dispatch({ type: GET_BUCKETLIST_SUCCESS, payload: resp });
      })
      .catch((error) => {
        dispatch({ type: GET_BUCKETLIST_ERROR, payload: error });
      });
  };
}

/**
 * action creator dispatches action to edit a given bucketlist
 * @param {number} id - id of the bucketlist to edit
 * @param {object} values - new values for name and discription
 * @param {func} callback - function executed on successful edit
 * @param {func} errorHandler - function executed on failure
 */
export function editBucketlist(id, values, callback, errorHandler) {
  return (dispatch) => {
    BucketlistApi.editBucketlistApi(id, values)
      .then((resp) => {
        dispatch({ type: EDIT_BUCKETLIST_SUCCESS, payload: resp });
        dispatch(() => callback());
      })
      .catch((err) => {
        dispatch({ type: EDIT_BUCKETLIST_ERROR, payload: err });
        dispatch(() => errorHandler());
      });
  };
}

/**
 * action creator dispatches action to add an item to a bucketlist
 * @param {number} id - id of the bucketlist the item is to be added to.
 * @param {object} values - values for name and description of the item
 * @param {func} callback - function executed on successful addition of the item
 * @param {func} errorHandler - function executed on failure
 */
export function addBucketlistItem(id, values, callback, errorHandler) {
  return (dispatch) => {
    BucketlistApi.addBucketlistItemApi(id, values)
      .then((resp) => {
        dispatch({ type: ADD_BUCKETLIST_ITEM_SUCCESS, payload: resp });
        dispatch(() => callback());
      })
      .catch((err) => {
        dispatch({ type: ADD_BUCKETLIST_ERROR, payload: err });
        dispatch(() => errorHandler());
      });
  };
}

/**
 * action creator dispatches action to delete an item from a bucketlist
 * @param {number} bucketlistId - id of the bucketlist from which item is to be deleted
 * @param {number} itemId - id of item to be deleted
 * @param {func} callback - function executed on successful deletion of item
 */
export function deleteBucketlistItem(bucketlistId, itemId, callback) {
  return (dispatch) => {
    BucketlistApi.deleteBucketlistItemApi(bucketlistId, itemId)
      .then((resp) => {
        dispatch({ type: DELETE_BUCKETLIST_ITEM_SUCCESS, payload: resp });
        dispatch(() => callback());
      })
      .catch((err) => {
        dispatch({ type: DELETE_BUCKETLIST_ITEM_ERROR, payload: err });
      });
  };
}

/**
 * action creator dispatches action to edit an item n a bucketlist
 * @param {number} bucketlistId - id of bucketlist containing the item to be edited
 * @param {number} itemId - id of the item to be edited
 * @param {object} values - new values for name and description of the item
 * @param {func} callback - function executed on successfull edit of item
 * @param {func} errorHandler - function executed on failure
 */
export function editItem(bucketlistId, itemId, values, callback, errorHandler) {
  return (dispatch) => {
    BucketlistApi.editBucketlistItem(bucketlistId, itemId, values)
      .then((resp) => {
        dispatch({ type: EDIT_BUCKETLIST_ITEM_SUCCESS, payload: resp });
        dispatch(() => callback());
      })
      .catch((err) => {
        dispatch({ type: EDIT_BUCKETLIST_ITEM_ERROR, payload: err });
        dispatch(() => errorHandler());
      });
  };
}

/**
 * action creator dispatches action to search for a bucketlist based on the term provided
 * @param {str} term - a term to be searched for in the name of bucketlist
 */
export function searchBucketlists(term) {
  return (dispatch) => {
    BucketlistApi.searchBucketlistsApi(term)
      .then((resp) => {
        dispatch({ type: SEARCH_BUCKETLISTS_SUCCESS, payload: resp });
      })
      .catch((err) => {
        dispatch({ type: SEARCH_BUCKETLISTS_ERROR, payload: err });
      });
  };
}

/**
 * action creator dispatches action to fetch items for a single bucketlist
 * @param {number} bucketlistId - Id of bucketlist whose items are to be fetched.
 * @param {number} page - Page number to be fetched.
 */
export function getBucketlistItem(bucketlistId, page) {
  return (dispatch) => {
    BucketlistApi.getBucketlistItemApi(bucketlistId, page)
      .then((resp) => {
        dispatch({ type: GET_BUCKETLIST_ITEMS_SUCCESS, payload: resp });
      })
      .catch((err) => {
        dispatch({ type: GET_BUCKETLIST_ITEMS_ERROR, payload: err });
      });
  };
}

/**
 * action creator dispatches action to search for a items based on term.
 * @param {number} bucketlistId - Id of bucketlist whose items are to be searched.
 * @param {String} term - a term to be searched for in the name of items.
 */
export function searchBucketlistItems(bucketlistId, term) {
  return (dispatch) => {
    BucketlistApi.searchBucketlistItemsApi(bucketlistId, term)
      .then((resp) => {
        dispatch({ type: SEARCH_BUCKETLIST_ITEMS_SUCCESS, payload: resp });
      })
      .catch((err) => {
        dispatch({ type: SEARCH_BUCKETLIST_ITEMS_ERROR, payload: err });
      });
  };
}
