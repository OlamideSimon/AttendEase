import { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from '../../../components/Input'
import { Button, FilledButton } from '../../../components/Button'
import { Link } from 'react-router-dom'
import Logo from '../../../components/Logo'
import { login, requestOtp } from '@/request/auth'
import { RotatingLines } from 'react-loader-spinner'
import { Toaster } from 'react-hot-toast'

const Signin = () => {
  const [formData, setFormData] = useState({
    phoneNum: '',
    otp: '',
  })
  const [loading, setLoading] = useState(false)
  const [otpLoading, setOtpLoading] = useState(false)
  const { otp, phoneNum } = formData

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const requestOTP = () => {
    requestOtp({ phoneNum, setLoading: setOtpLoading })
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await login({ loginData: formData, setLoading })
  }

  const validPhoneNum = phoneNum.length === 11

  return (
    <div className="w-dvw lg:h-dvh flex flex-col lg:flex-row gap-y-10">
      <div className="w-full lg:w-1/5 bg-gray-500 h-40 lg:h-full p-5 flex items-center lg:items-start justify-center lg:justify-start gap-2">
        <Logo />
      </div>
      <section className="w-full lg:w-4/5 h-[500px] lg:h-full">
        <form onSubmit={onSubmit} className="h-[95%] grid place-content-center gap-2">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <small>Sign in to your account</small>
          </div>

          {/* email */}
          <Input
            name="phoneNum"
            type="number"
            onChange={onChange}
            label="Phone Number"
            value={phoneNum}
            className="lg:min-w-80"
            required
          />

          {/* password */}
          <div className="flex items-end">
            <Input
              name="otp"
              type="number"
              onChange={onChange}
              label="OTP"
              value={otp}
              className="lg:min-w-80"
              required
            />
            <Button
              disabled={!validPhoneNum}
              onClick={requestOTP}
              className="text-green-500"
              type="button"
            >
              {otpLoading ? <RotatingLines width="30" /> : 'Request OTP'}
            </Button>
          </div>

          <FilledButton
            className="ml-auto"
            loading={loading}
            type="submit"
            disabled={loading}
          >
            Login
          </FilledButton>
        </form>

        <div className="text-center flex flex-col">
          <small>
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </small>

          <small>Reset password</small>
        </div>
      </section>

      <Toaster />
    </div>
  )
}

export default Signin
