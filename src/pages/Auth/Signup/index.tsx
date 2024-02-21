/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'
import Personal from './steps/personal'
import LoginInfo from './steps/login_info'

const Signup = () => {
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    course: '',
    email: '',
    password: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (step < 2) return

    console.log(step)
    console.log(formData)
  }

  const formSteps: { [key: number]: JSX.Element } = {
    1: <Personal formData={formData} onChange={onChange} />,
    2: <LoginInfo formData={formData} onChange={onChange} />,
  }

  const onClickNext = () => {
    if (step < 2) {
      setStep((prevStep) => prevStep + 1)
    }
  }

  const onClickPrev = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1))
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
            <h1 className="text-4xl font-bold">Create an account</h1>
            <small>Gain access to our services by creating an account</small>
          </div>

          {formSteps[step]}

          {step >= 1 && step < 3 && (
            <div className="flex">
              {step > 1 && (
                <Button type="button" className="text-green-500" onClick={onClickPrev}>
                  Previous
                </Button>
              )}
              <Button
                onClick={onClickNext}
                type="submit"
                className="bg-green-500 ml-auto text-white"
              >
                Next
              </Button>
            </div>
          )}
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
    </div>
  )
}

export default Signup
