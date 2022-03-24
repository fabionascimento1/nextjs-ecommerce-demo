import React from 'react'
import { HeadingProps } from './types'
import * as S from './styles'

const Heading: React.FC<HeadingProps> = ({
  reverseColor = false,
  lineBottom = false,
  children
}) => (
  <S.Wrapper reverseColor={reverseColor} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading
