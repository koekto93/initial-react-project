import React from 'react'
import { CircleLoader } from 'react-spinners'

import { Container } from './styled'

const Loader = () => {
  return (
    <Container>
      <CircleLoader
        sizeUnit={'px'}
        size={150}
        color={'#36D7CC'}
        loading={true}
      />
    </Container>
  )
}

export default Loader
