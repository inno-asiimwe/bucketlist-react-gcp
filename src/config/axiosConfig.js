/** Axios configurations for the app */
import axios from 'axios';
import store from './store';

// Create an instance of axios with API url
const instance = axios.create({
  baseURL: 'https://inno-bucketlist-api.herokuapp.com/',
});

// Add headers to the request in the instance
instance.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';

  return config;
});
// Export the instance for use.
export default instance;
