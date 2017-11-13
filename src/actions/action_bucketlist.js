import instance from '../config/axiosConfig';

export const GET_POSTS = 'get_post';
export const GET_POSTS_PENDING = 'get_posts_REQUEST';
export const GET_POSTS_SUCCESS = 'get_posts_SUCCESS';
export const GET_POSTS_ERROR = 'get_posts_ERROR';

export function getPosts() {
  const request = instance.get('/bucketlists');
  return {
    type: GET_POSTS,
    payload: request
  };
}
