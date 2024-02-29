import { BASE_URL } from '@/config/serverApiConfig'
import errHandler from '@/request/errHandler'
import { LoginType, RequestOtpType, TeacherSignupType } from '@/request/interfaces'
import successHandler from '@/request/successHandler'
import { createApiInstance } from '@/config/axios'
import { storageHandler } from '@/config/localStorage'

export const login = async ({ loginData, setLoading }: LoginType) => {
  try {
    const response = await createApiInstance(setLoading).post(
      `${BASE_URL}/auth/login`,
      loginData
    )

    const { status, data } = response

    successHandler(
      { data, status },
      {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      }
    )

    await storageHandler.setToken(data.accessToken)
    await storageHandler.setTeacherId(data.account.id)

    return data
  } catch (error) {
    return errHandler(error)
  }
}

export const signup = async ({ signupData, setLoading }: TeacherSignupType) => {
  try {
    const response = await createApiInstance(setLoading).post(
      `${BASE_URL}/auth/signup/teacher`,
      signupData
    )

    const { status, data } = response

    successHandler(
      { data, status },
      {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      }
    )

    await storageHandler.setToken(data.accessToken)
    await storageHandler.setTeacherId(data.account.id)
    return data
  } catch (error) {
    return errHandler(error)
  }
}

export const requestOtp = async ({ phoneNum, setLoading }: RequestOtpType) => {
  try {
    const response = await createApiInstance(setLoading).post(
      `${BASE_URL}/auth/request-otp`,
      {
        phoneNum,
      }
    )

    const { status, data } = response

    successHandler(
      { data, status },
      {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      }
    )

    return data
  } catch (error) {
    return errHandler(error)
  }
}
