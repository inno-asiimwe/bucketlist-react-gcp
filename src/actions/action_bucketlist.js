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

export function getBucketlists() {
  const request = instance.get('/bucketlists');
  return {
    type: GET_BUCKETLISTS,
    payload: request
  };
}

export function addBucketlist(values, callback) {
  const request = instance.post('/bucketlists', values).then(() => callback());
  return {
    type: ADD_BUCKETLIST,
    payload: request
  };
}

export function deleteBucketlist(id) {
  const request = instance.delete(`/bucketlists/${id}`);
  return {
    type: DELETE_BUCKETLIST,
    payload: request
  };
}
