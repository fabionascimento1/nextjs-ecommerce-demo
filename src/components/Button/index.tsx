import React, { forwardRef } from 'react'
import * as S from './styles'

import { ButtonProps } from './types'

const Button: React.ForwardRefRenderFunction<
  S.wrapperButtonProps,
  ButtonProps
> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
