type Loading = {
  setLoading?: (loading: boolean) => void
}

export type Classes = Loading & {
  courseId: string
}

export type GetClassByIdType = Loading & {
  classId: string
}
