import { ChangeEvent, FormEvent, useState } from 'react'
import { FilledButton } from '../../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../components/Logo'
import { Input } from '@/components/Input'
import { signup } from '@/request/auth'
import { Toaster } from 'react-hot-toast'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    universityName: '',
    phoneNum: '',
  })
  const [loading, setLoading] = useState(false)

  const { name, universityName, phoneNum } = formData

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await signup({ signupData: formData, setLoading })

    if (data) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="w-dvw lg:h-dvh flex flex-col lg:flex-row gap-y-10">
      <div className="w-full lg:w-1/5 bg-gray-500 h-40 lg:h-full p-5 flex items-center lg:items-start justify-center lg:justify-start gap-2">
        <Logo />
      </div>
      <section className="w-full lg:w-4/5 h-[500px] lg:h-full">
        <form onSubmit={onSubmit} className="h-[95%] grid place-content-center gap-2">
          <div className="mb-4">
            <h1 className="text-4xl font-bold">Create an account</h1>
            <small>Gain access to our services by creating an account</small>
          </div>

          <div className="grid gap-y-3">
            <Input
              name="name"
              type="text"
              onChange={onChange}
              label="Name"
              value={name}
              required
            />

            <Input
              name="universityName"
              type="text"
              onChange={onChange}
              label="University Name"
              value={universityName}
              required
            />

            <Input
              name="phoneNum"
              type="number"
              onChange={onChange}
              label="Phone Number"
              value={phoneNum}
              required
            />
          </div>

          <div className="flex ml-auto">
            <FilledButton loading={loading} type="submit" disabled={loading}>
              Submit
            </FilledButton>
          </div>
        </form>

        <div className="text-center flex flex-col">
          <small>
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-500">
              Sign in
            </Link>
          </small>
        </div>
      </section>

      <Toaster />
    </div>
  )
}

export default Signup
