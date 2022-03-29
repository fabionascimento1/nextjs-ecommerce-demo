import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from './types'

export const wrapperModifiers = {
  defaultColor: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,

  reverseColor: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: 0;
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      content: ' ';
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      width: 5rem;
      position: absolute;
      left: 0;
      bottom: -0.5rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
    `}
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, reverseColor, lineBottom, size, lineColor }) => css`
    padding-left: 1rem;

    ${!reverseColor && wrapperModifiers.defaultColor(theme)};
    ${reverseColor && wrapperModifiers.reverseColor(theme)};

    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor)};
    ${!lineBottom && wrapperModifiers.lineLeft(theme, lineColor)};

    ${!!size && wrapperModifiers[size](theme)};
  `};
`
