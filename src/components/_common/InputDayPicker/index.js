import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment'
import 'moment/locale/ru'
import 'react-day-picker/lib/style.css'

import { Container } from './styled'

const InputDayPicker = ({ onChange }) => {
  const FORMAT = 'DD.MM.YYYY'
  const handleChange = value => {
    onChange(value)
  }
  return (
    <Container>
      <DayPickerInput
        onDayChange={handleChange}
        inputProps={{ style: { width: 194 } }}
        format={FORMAT}
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{ localeUtils: MomentLocaleUtils, locale: 'ru' }}
        placeholder="дд.мм.гггг"
      />
    </Container>
  )
}

export default InputDayPicker
