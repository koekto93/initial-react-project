import styled from 'styled-components'

export const Container = styled.div`
  font-family: PFEncoreSansPro-Bold;
  font-size: 18px;
  color: #14162c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`

export const FormHeader = styled.span``

export const CloseIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`
