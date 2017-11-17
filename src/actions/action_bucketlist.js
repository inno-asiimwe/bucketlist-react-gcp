import instance from '../config/axiosConfig';

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
export const GET_BUCKETLIST = 'get_bucketlist';
export const GET_BUCKETLIST_SUCCESS = 'get_bucketlist_SUCCESS';
export const EDIT_BUCKETLIST = 'edit_bucketlist';
export const EDIT_BUCKETLIST_SUCCESS = 'edit_bucketlist_SUCCESS';

export function getBucketlists() {
  const request = instance.get('/v1/bucketlists');
  return {
    type: GET_BUCKETLISTS,
    payload: request
  };
}

export function addBucketlist(values, callback) {
  const request = instance.post('/v1/bucketlists', values).then(() => callback());
  return {
    type: ADD_BUCKETLIST,
    payload: request
  };
}

export function deleteBucketlist(id) {
  const request = instance.delete(`/v1/bucketlists/${id}`);
  return {
    type: DELETE_BUCKETLIST,
    payload: request
  };
}

export function getBucketlist(id) {
  const request = instance.get(`/v1/bucketlists/${id}`);
  return {
    type: GET_BUCKETLIST,
    payload: request
  };
}

export function editBucketlist(id, values, callback) {
  const request = instance.put(`/v1/bucketlists/${id}`, values).then(() => callback());
  return {
    type: EDIT_BUCKETLIST,
    payload: request
  };
}
