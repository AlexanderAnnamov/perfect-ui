import React from 'react'

export type ButtonProps = {
  children?: React.ReactNode
} & React.ComponentProps<'button'>

export const Button: React.FC<ButtonProps> = (props) => {
  const { ...rest } = props
  return (
    <button {...rest}>{props.children}</button>
  )
}
