import errHandler from '../errHandler'
import successHandler from '../successHandler'
import { BASE_URL } from '@/config/serverApiConfig'
import { Classes, GetClassByIdType } from '../interfaces'
import { createApiInstance } from '@/config/axios'

export const createClass = async ({ courseId, setLoading }: Classes) => {
  try {
    const response = await createApiInstance(setLoading).post(`${BASE_URL}/classes`, {
      courseId,
    })
    const { status, data } = response
    successHandler(
      { data, status },
      {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      }
    )
    return data
  } catch (error) {
    return errHandler(error)
  }
}

export const getClassById = async ({ classId, setLoading }: GetClassByIdType) => {
  try {
    const response = await createApiInstance(setLoading).get(
      `${BASE_URL}/classes/${classId}`
    )
    const { status, data } = response
    successHandler(
      { data, status },
      {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      }
    )
    return data
  } catch (error) {
    return errHandler(error)
  }
}

export const getClassesByCourseId = async ({ courseId, setLoading }: Classes) => {
  try {
    const response = await createApiInstance(setLoading).get(
      `${BASE_URL}/classes/course/${courseId}`
    )
    const { status, data } = response
    successHandler(
      { data, status },
      {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      }
    )
    return data
  } catch (error) {
    return errHandler(error)
  }
}
