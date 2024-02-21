import React from 'react'
import { Input } from '../../../../components/Input'

type PersonalProps = {
  formData: {
    email: string
    password: string
  }
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Personal = ({ formData, onChange }: PersonalProps) => {
  const { email, password } = formData
  return (
    <div className="md:min-w-96">
      <h6 className="text-xl border-b mb-5">Personal Info</h6>
      <div className="grid gap-y-3">
        {/* email */}
        <Input
          name="email"
          type="email"
          onChange={onChange}
          label="Email"
          value={email}
          required
        />

        {/* password */}
        <Input
          name="password"
          type="password"
          onChange={onChange}
          label="Password"
          value={password}
          required
        />
      </div>
    </div>
  )
}

export default Personal
