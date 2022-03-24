import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './types'

type wrapperButtonProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<wrapperButtonProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: linear-gradient(180deg, #6dfdfc 0%, #1ed6ff 100%);
    color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-weight: 500;
    cursor: pointer;

    ${!!size && wrapperModifiers[size](theme)}

    ${!!fullWidth && wrapperModifiers.fullWidth()}

    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
