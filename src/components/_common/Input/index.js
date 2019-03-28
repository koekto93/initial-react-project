//@flow
import React from 'react'

import { CustomInput } from './styled'

type InputProps = {
  onChange: Function,
  value: string,
}

const Input = ({ value, onChange, type }: InputProps) => {
  const handleChange = event => {
    onChange(event.target.value)
  }

  return <CustomInput onChange={handleChange} value={value} type={type} />
}

Input.defaultProps = {
  type: 'text',
}

export default Input
