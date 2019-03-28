//@flow
import React from 'react'

import { Container } from './styled'

type CheckboxProps = {
  onChange: Function,
  checked: number,
  label: string,
}

const Checkbox = ({ onChange, checked, label }: CheckboxProps) => {
  function handleClick() {
    onChange()
  }

  function handleChange() {
    return {}
  }

  return (
    <Container>
      {label}
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="checkmark" onClick={handleClick} />
    </Container>
  )
}

export default Checkbox
