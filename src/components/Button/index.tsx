import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    className?: string
  }>

const Button = ({ className, children, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`rounded-xl py-3 font-semibold text-xl px-5 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
