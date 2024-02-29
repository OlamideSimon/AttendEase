import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Partial<{
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    label: string
    className: string
    labelClassName: string
    name: string
  }>

export const Input = ({
  onChange,
  value,
  label,
  className,
  labelClassName,
  type,
  name,
  ...props
}: InputProps) => {
  const [inputType, setInputType] = useState(type)

  const showPassword = () => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className={`text-slate-600 ${labelClassName}`}>
        {label}
      </label>
      <div className="relative">
        <input
          className={`bg-slate-200 border rounded-lg text-lg p-2 w-full border-slate-400 ${className} ${
            type === 'password' && 'pr-8'
          }`}
          onChange={onChange}
          value={value}
          type={inputType}
          name={name}
          {...props}
        />
        {type === 'password' && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xl"
            onClick={showPassword}
          >
            {inputType === 'password' ? <IoEye /> : <IoEyeOff />}
          </button>
        )}
      </div>
    </div>
  )
}
