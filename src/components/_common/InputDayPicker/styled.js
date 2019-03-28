import styled from 'styled-components'

import calendar from '../../../images/calendar.svg'

export const Container = styled.div`
  & .DayPicker {
    display: inline-block;
    font-size: 0.65rem;
  }

  & .DayPickerInput input {
    border: 1px solid #D8D8D8;
    border-radius: 2px;
    padding: 9px 0px 9px 9px;
    height: 29px;
    background: url('${calendar}') no-repeat 95% 50%;
    background-size: auto 50%;
  }
`
