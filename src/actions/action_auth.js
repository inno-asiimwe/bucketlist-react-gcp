import axios from 'axios';

export const REGISTER = 'register';
export const REGISTER_SUCCESS = 'register_SUCCESS';
export const REGISTER_ERROR = 'register_ERROR';
export const REGISTER_PENDING = 'register_REQUEST';

export function registerUser(values) {
  const request = axios.post('http://127.0.0.1:5000/auth/register', values);
  return {
    type: REGISTER,
    payload: request
  };
}

