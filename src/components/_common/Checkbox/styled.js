import styled from 'styled-components'

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid #979797;
    background-color: transparent;
  }

  /* &:hover input ~ .checkmark {
    background-color: #ccc;
  } */

  & input:checked ~ .checkmark {
    background-color: #7ed321;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: solid #f6f7f9;
    border-width: 1px;
  }
`
