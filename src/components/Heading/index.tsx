import React from 'react'
import { HeadingProps } from './types'
import * as S from './styles'

const Heading: React.FC<HeadingProps> = ({
  reverseColor = false,
  lineBottom = false,
  children,
  size = 'medium'
}) => (
  <S.Wrapper reverseColor={reverseColor} lineBottom={lineBottom} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
