import axios from 'axios';
import store from './store';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

instance.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';

  return config;
});
export default instance;
