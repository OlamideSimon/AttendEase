import { jwtDecode } from 'jwt-decode'

export const storageHandler = {
  getToken() {
    return typeof window !== 'undefined' && localStorage.getItem('_auth')
  },
  setToken(token: string) {
    return typeof window !== 'undefined' && localStorage.setItem('_auth', token)
  },
  isTokenExpired() {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('_auth')
      const decodedToken: { exp: number } = jwtDecode(token!)
      const expirationDate = new Date(decodedToken.exp * 1000)

      return expirationDate > new Date()
    }
  },
  getTeacherId() {
    if (typeof window !== 'undefined') {
      const id = localStorage.getItem('_id')
      return id
    }
  },
  setTeacherId(teacherId: string) {
    if (typeof window !== 'undefined') {
      return localStorage.setItem('id', teacherId)
    }
  },
  removeCredentials() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('_auth')
      localStorage.removeItem('_role')
      return true
    }
  },
}
