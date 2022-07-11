import http from '../utils/http'

const authApi = {
  register(data) {
    return http.post('register', data)
  }
}
export default authApi