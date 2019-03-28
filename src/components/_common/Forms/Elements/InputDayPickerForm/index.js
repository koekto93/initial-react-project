//@flow
import React from 'react'

import { InputDayPicker, ErrorMessage } from '../../../index'

type InputDayPickerFormProps = {
  input: Object<any>,
  meta: Object<any>,
}

const InputDayPickerForm = ({ input, meta }: InputDayPickerFormProps) => {
  return (
    <div>
      <InputDayPicker onChange={input.onChange} />
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </div>
  )
}

export default InputDayPickerForm
