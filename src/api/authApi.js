/**
 * All calls to the API concerning Authentication
 */
import instance from '../config/axiosConfig';

class AuthApi {
  static registerUserApi(values) {
    return instance.post('/v1/auth/register', values);
  }
  static loginUserApi(values) {
    return instance.post('/v1/auth/login', values);
  }
  static logoutUserApi() {
    return instance.post('/v1/auth/logout');
  }
}
export default AuthApi;
