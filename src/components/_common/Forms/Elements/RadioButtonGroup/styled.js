import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`
export const RadioButtonWrapper = styled.div`
  min-height: 5em;
  display: flex;
  flex-flow: row wrap;

  & > div {
    margin-right: 30px;
  }
`
export const ErrorMessage = styled.div`
  width: 100%;
  height: 20px;
  font-size: 12px;
  letter-spacing: 0px;
  color: #b73f4e;
`
