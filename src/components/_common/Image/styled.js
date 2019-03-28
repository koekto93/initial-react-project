import styled, { css } from 'styled-components'

export const Img = styled.img`
  display: block;
  ${props =>
    props.objectFit &&
    css`
      object-fit: cover;
    `};
`
