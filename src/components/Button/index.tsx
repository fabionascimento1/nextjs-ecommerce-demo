import React from 'react'
import * as S from './styles'

import { ButtonProps } from './types'

const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
