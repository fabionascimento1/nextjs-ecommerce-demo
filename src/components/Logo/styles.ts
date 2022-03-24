import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from './types'

const wrapperModifiers = {
  normal: () => css`
    width: 17rem;
    height: auto;
  `,
  large: () => css`
    width: 27rem;
    height: auto;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg{
        height: 4.5rem;
        pointer-events: none;
      }
      .text{
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}

    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
