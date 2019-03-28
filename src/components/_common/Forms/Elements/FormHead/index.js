//@flow
import React from 'react'

//import { ReactComponent as CloseIcon } from '../../../../../images/close.svg'

import { Container, FormHeader, CloseIconWrapper } from './styled'

type FormHeadProps = {
  text: string,
  onClick: Function,
}

const FormHead = ({ text, onClick }: FormHeadProps) => {
  return (
    <Container>
      <FormHeader>{text}</FormHeader>
      <CloseIconWrapper onClick={onClick}>
        {/* <CloseIcon /> */}
      </CloseIconWrapper>
    </Container>
  )
}

export default FormHead
