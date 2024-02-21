import React from 'react'
import { Input } from '../../../../components/Input'

type loginInfoProps = {
  formData: {
    name: string
    university: string
    course: string
  }
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginInfo = ({ formData, onChange }: loginInfoProps) => {
  const { course, name, university } = formData
  return (
    <div className="md:min-w-96">
      <h6 className="text-xl border-b mb-5">Login Info</h6>
      {/* Full Name */}
      <div className="grid gap-y-3">
        <Input
          name="name"
          type="text"
          onChange={onChange}
          label="Full Name"
          placeholder="John Doe"
          value={name}
          required
        />

        {/* University */}
        <Input
          name="university"
          type="text"
          onChange={onChange}
          label="University Name"
          value={university}
          required
        />

        {/* Course */}
        <Input
          name="course"
          type="text"
          onChange={onChange}
          label="Course Name"
          value={course}
          required
        />
      </div>
    </div>
  )
}

export default LoginInfo
