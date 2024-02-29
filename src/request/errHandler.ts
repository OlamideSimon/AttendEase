/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'
import codeMessage from './codeMessage'

interface ErrorResponse {
  success: boolean
  result: null
  message: string
}

const errHandler = (err: AxiosError | any): ErrorResponse | void => {
  if (!navigator.onLine) {
    toast.error('No internet connection')

    return {
      success: false,
      result: null,
      message: 'No internet connection',
    }
  }

  const { response } = err

  if (!response) {
    toast.error('Something went wrong. Please try again')

    return {
      success: false,
      result: null,
      message: 'Something went wrong. Please try again',
    }
  }

  if (response && response.status) {
    const message = response.data && response?.data?.message

    const errorText = message || codeMessage[response.status]

    toast.error(errorText)
  }
}

export default errHandler
