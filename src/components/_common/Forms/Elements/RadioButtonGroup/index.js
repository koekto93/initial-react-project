//@flow
import React from 'react'

import { RadioButton } from '../RadioButton'

import { RadioButtonWrapper, Container, ErrorMessage } from './styled'

type RadioButtonGroupProps = {
  input: Object,
  meta: Object,
  radioButtonOptions: Array<{ value: string, text: string }>,
}

const RadioButtonGroup = ({
  input,
  meta,
  radioButtonOptions,
}: RadioButtonGroupProps) => {
  const allOptions = radioButtonOptions.map((item, i) => (
    <RadioButton
      key={i}
      text={item.text}
      value={item.value}
      name="operationType"
      checked={item.value === input.value}
      onChange={event => input.onChange(event.target.value)}
    />
  ))
  return (
    <Container>
      <RadioButtonWrapper>{allOptions}</RadioButtonWrapper>
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Container>
  )
}

export default RadioButtonGroup
