import styled from 'styled-components'

export const Container = styled.div`
  & .radio input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 7px;
  }
  & .radio__text {
    position: relative;
    padding: 0 0 0 26px;
    cursor: pointer;
    font-family: PFEncoreSansPro-Book;
    font-size: 14px;
    color: #1b1e2d;
    letter-spacing: 0.18px;
    line-height: 20px;
  }
  & .radio__text:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 16px;
    height: 15.76px;
    border: 1px solid #d2d2d2;
    border-radius: 50%;
    background: #fff;
  }
  & .radio__text:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 7.88px;
    border-radius: 50%;
    background: #7ed321;
    border: 1.5px solid #7ed321;
    opacity: 0;
    // transition: 0.2s;
  }
  & .radio input:checked + .radio__text:after {
    opacity: 1;
  }

  & .radio input:checked + .radio__text:before {
    border: 1.5px solid #7ed321;
  }
`
