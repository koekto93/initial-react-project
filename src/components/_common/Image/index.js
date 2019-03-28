//@flow
import React from 'react'

import { Img } from './styled'

type ImageProps = {
  src: string,
  width: number | string,
  height: number | string,
  alt: string,
}

const Image = ({ src, width, height, alt, objectFit }: ImageProps) => {
  return (
    <Img
      src={src}
      width={width}
      height={height}
      alt={alt}
      objectFit={objectFit}
    />
  )
}

export default Image
