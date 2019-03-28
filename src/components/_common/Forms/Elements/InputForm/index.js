//@flow
import React from 'react'

import { Input, ErrorMessage } from '../../../index'

type InputFormProps = {
  input: Object,
  meta: Object,
  rest: Array,
}

const InputForm = ({ input, meta, ...rest }: InputFormProps) => {
  return (
    <div>
      <Input onChange={input.onChange} value={input.value} {...rest} />
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </div>
  )
}

export default InputForm
