import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios'
import { storageHandler } from './localStorage'

export const createApiInstance = (setLoading?: (loading: boolean) => void) => {
  const api: AxiosInstance = axios.create({
    baseURL: 'https://maykehra-africa.onrender.com/api',
  })

  api.interceptors.request.use(async (config) => {
    setLoading?.(true)

    const token = storageHandler.getToken()
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders
    }

    return config
  })

  api.interceptors.response.use(
    (response) => {
      setLoading?.(false)

      return response
    },
    (error) => {
      setLoading?.(false)

      return Promise.reject(error)
    }
  )

  return api
}
