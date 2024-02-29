type Loading = {
  setLoading?: (loading: boolean) => void
}

export type LoginType = Loading & {
  loginData: {
    phoneNum: string
    otp: string
  }
}

export type TeacherSignupType = Loading & {
  signupData: {
    name: string
    universityName: string
    phoneNum: string
  }
}

export type RequestOtpType = Loading & {
  phoneNum: string
}
