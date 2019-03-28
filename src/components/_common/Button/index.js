//@flow
import React from 'react'

import { ButtonContainer } from './styled'

type ButtonProps = {
  value: string,
  onClick: Function,
  positiveRole?: boolean,
  negativeRole?: boolean,
}

const Button = ({
  value,
  onClick,
  positiveRole,
  negativeRole,
}: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      positiveRole={positiveRole}
      negativeRole={negativeRole}
    >
      <span>{value}</span>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  positiveRole: false,
  negativeRole: false,
  onClick: () => {},
}

export default Button
