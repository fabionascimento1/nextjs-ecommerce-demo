import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styles/styled-media-query'

import { HeadingProps } from './types'

const wrapperModifiers = {
  defaultColor: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,

  reverseColor: (theme: DefaultTheme) => css`
    color: ${theme.colors.lightGray};
  `,

  lineLeft: (theme: DefaultTheme) => css`
    border-left: 7px solid ${theme.colors.secondary};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    padding-left: 0;
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      content: ' ';
      border-bottom: 0.5rem solid ${theme.colors.secondary};
      width: 5rem;
      position: absolute;
      left: 0;
      bottom: -1rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, reverseColor, lineBottom, size }) => css`
    padding-left: 1rem;

    /* ${media.greaterThan('tablet')`
    margin: 7rem 0 1.5rem;
  `}

  ${media.lessThan('tablet')`
    margin: 2rem 0 1.5rem;
  `} */

    ${!reverseColor && wrapperModifiers.defaultColor(theme)};
    ${reverseColor && wrapperModifiers.reverseColor(theme)};

    ${lineBottom && wrapperModifiers.lineBottom(theme)};
    ${!lineBottom && wrapperModifiers.lineLeft(theme)};

    ${!!size && wrapperModifiers[size](theme)};
  `};
`
