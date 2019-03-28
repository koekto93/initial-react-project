import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: PFEncoreSansPro-Light;
  cursor: pointer;
  color: #000;
  background-color: transparent;
  border-radius: 32px;
  border: 1px solid
    ${props =>
      props.positiveRole
        ? '#7ED321'
        : props.negativeRole
        ? '#DC0956'
        : '#484f5d'};

  &:hover {
    color: #fff;
    background-color: ${props =>
      props.positiveRole
        ? '#7ED321'
        : props.negativeRole
        ? '#DC0956'
        : '#484f5d'};
  }

  &:active,
  &:focus {
    outline: none;
  }
`
