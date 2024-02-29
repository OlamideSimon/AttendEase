import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Triangle } from 'react-loader-spinner'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    className?: string
    loading?: boolean
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
  loading,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`bg-green-500 disabled:bg-green-300 text-white gap-3 rounded-xl flex items-center py-3 font-semibold text-xl px-5 ${className}`}
      {...props}
    >
      {loading ? (
        <Triangle
          height="20"
          width="20"
          color="white"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : null}
      <span className='flex items-center gap-2'>{children}</span>
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
