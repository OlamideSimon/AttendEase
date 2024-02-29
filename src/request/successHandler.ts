/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-hot-toast'
import codeMessage from './codeMessage'

interface SuccessHandlerOptions {
  notifyOnSuccess?: boolean
  notifyOnFailed?: boolean
}

const successHandler = (
  response: any,
  options: SuccessHandlerOptions = { notifyOnSuccess: true, notifyOnFailed: true }
): void => {
  const { data } = response
  if (data) {
    const message = response.data && data.message
    const successText = message || codeMessage[response.status]

    toast.success(successText, {
      duration: 2000,
    })
  } else {
    const message = response.data && data.message
    const errorText = message || codeMessage[response.status]
    const { status } = response
    if (options.notifyOnFailed) {
      toast.error(`Request error ${status}: ${errorText}`, {
        duration: 4000,
      })
    }
  }
}

export default successHandler
