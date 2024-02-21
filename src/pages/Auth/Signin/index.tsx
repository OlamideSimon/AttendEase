import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from '../../../components/Input'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'

const Signin = () => {
  const [forlgata, setForlgata] = useState({
    email: '',
    password: '',
  })
  const { email, password } = forlgata

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForlgata({ ...forlgata, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="w-dvw lg:h-dvh flex flex-col lg:flex-row gap-y-10">
      <div className="w-full lg:w-1/5 bg-gray-500 h-40 lg:h-full p-5 flex items-center lg:items-start justify-center lg:justify-start gap-2">
        <h1 className="text-3xl text-white font-bold">AttendEase</h1>
        <div className="p-5 rounded-full bg-white w-fit h-fit"></div>
      </div>
      <section className="w-full lg:w-4/5 h-[500px] lg:h-full">
        <form onSubmit={onSubmit} className="h-[95%] grid place-content-center gap-2">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <small>Sign in to your account</small>
          </div>

          {/* email */}
          <Input
            name="email"
            type="email"
            onChange={onChange}
            label="Email"
            value={email}
            className="lg:min-w-80"
          />

          {/* password */}
          <Input
            name="password"
            type="password"
            onChange={onChange}
            label="Password"
            value={password}
            className="lg:min-w-80"
          />

          <Button className="bg-green-500 ml-auto text-white">Login</Button>
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
    </div>
  )
}

export default Signin
