import { api } from './api';
const authService = {
    login(userName, password) {
        return api.call().post('/jwt-auth/v1/token', {
        username:userName,
        password:password
        });
      }
}
export default authService;