import instance from '../config/axiosConfig';

export const GET_BUCKETLISTS = 'get_bucketlists';
export const GET_BUCKETLISTS_PENDING = 'get_bucketlists_REQUEST';
export const GET_BUCKETLISTS_SUCCESS = 'get_bucketlists_SUCCESS';
export const GET_BUCKETLISTS_ERROR = 'get_bucketlists_ERROR';

export function getBucketlists() {
  const request = instance.get('/bucketlists');
  return {
    type: GET_BUCKETLISTS,
    payload: request
  };
}
