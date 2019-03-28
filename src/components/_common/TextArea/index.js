//@flow
import React from 'react'

import { CustomTextArea } from './styled'

type InputProps = {
  onChange: Function,
  value: string,
}

const TextArea = ({ value, onChange }: InputProps) => {
  const handleChange = event => {
    onChange(event.target.value)
  }

  return (
    <CustomTextArea
      onChange={handleChange}
      value={value}
      placeholder="Поле для ввода текста"
    />
  )
}

export default TextArea
