import styled from 'styled-components'

export const ModalContainer = styled.div`
  min-width: 570px;
  min-height: 287px;
  height: 100%;
  background-color: #ffffff;
  border: 0.3px solid rgba(210, 210, 210, 0.51);
  box-shadow: 0 0 11px 0 rgba(0, 0, 0, 0.05);
  padding: 27px 34px;

  & .error-message {
    width: 100%;
    height: 20px;
    font-size: 12px;
    letter-spacing: 0px;
    color: #b73f4e;
  }
`

export const FormContent = styled.div`
  height: 100%;
  min-height: 16em;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const AnotherControls = styled.div`
  display: flex;
  flex-direction: row;

  & > div:first-child {
    margin-right: 34px;
  }
`

export const FieldWrapper = styled.div``

export const Label = styled.p`
  margin-bottom: 6px;
`
