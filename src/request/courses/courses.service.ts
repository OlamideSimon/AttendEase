import { BASE_URL } from '@/config/serverApiConfig'
import successHandler from '../successHandler'
import errHandler from '../errHandler'
import {
  CourseType,
  CoursesForTeacherType,
  DeleteCourseType,
  GetCourseByIdType,
  UpdateCourseType,
} from '../interfaces'
import { createApiInstance } from '@/config/axios'

export const createCourse = async ({ courseData, setLoading }: CourseType) => {
  try {
    const response = await createApiInstance(setLoading).post(
      `${BASE_URL}/courses`,
      courseData
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

export const getCoursesForTeacher = async ({
  teacherId,
  setLoading,
}: CoursesForTeacherType) => {
  try {
    const response = await createApiInstance(setLoading).get(
      `${BASE_URL}/courses/teacher/${teacherId}`
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

export const getCourseById = async ({ courseId, setLoading }: GetCourseByIdType) => {
  try {
    const response = await createApiInstance(setLoading).get(
      `${BASE_URL}/courses/${courseId}`
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

export const updateCourse = async ({
  courseData,
  courseId,
  setLoading,
}: UpdateCourseType) => {
  try {
    const response = await createApiInstance(setLoading).patch(
      `${BASE_URL}/courses/${courseId}`,
      courseData
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

export const deleteCourse = async ({ courseId, setLoading }: DeleteCourseType) => {
  try {
    const response = await createApiInstance(setLoading).delete(
      `${BASE_URL}/courses/${courseId}`
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
