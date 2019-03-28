//@flow
import React from 'react'

import { Container } from './styled'

type RadioButtonProps = {
  text: string,
  name: string,
  value: string,
  checked: boolean,
  onChange: Function,
}

export const RadioButton = ({
  onChange,
  name,
  text,
  value,
  checked,
}: RadioButtonProps) => {
  return (
    <Container>
      <label className="radio">
        <input
          type="radio"
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
        />
        <span className="radio__text">{text}</span>
      </label>
    </Container>
  )
}
