type Loading = {
  setLoading?: (loading: boolean) => void
}

export type CourseType = Loading & {
  courseData: {
    name: string
    duration: number
    courseCode: string
  }
}

export type UpdateCourseType = Partial<
  CourseType & {
    courseId: string
  }
>

export type CoursesForTeacherType = Loading & {
  teacherId: string
}

export type GetCourseByIdType = Loading & {
  courseId: string
}

export type DeleteCourseType = Loading & {
  courseId: string
}
