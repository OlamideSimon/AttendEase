import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    className?: string
  }>

export const Button = ({
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={`p-2 ${className}`} {...props}>
      {children}
    </button>
  )
}

export const FilledButton = ({
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`bg-green-500 text-white rounded-xl py-3 font-semibold text-xl px-5 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const OutlineButton = ({
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`border border-green-500 text-green-500 rounded-xl py-3 font-semibold text-xl px-5 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
