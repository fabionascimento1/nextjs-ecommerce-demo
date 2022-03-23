import styled, { css } from 'styled-components'

import { LogoProps } from './types'

const wrapperModifiers = {
  normal: () => css`
    width: 17rem;
    height: auto;
  `,
  large: () => css`
    width: 27rem;
    height: auto;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
  `}
`
