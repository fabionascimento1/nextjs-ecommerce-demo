import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './types'

type wrapperButtonProps = Pick<ButtonProps, 'size' | 'fullWidth'>

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
  `
}

export const Wrapper = styled.button<wrapperButtonProps>`
  ${({ theme, size, fullWidth }) => css`
    background: linear-gradient(180deg, #6dfdfc 0%, #1ed6ff 100%);
    color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-weight: 500;

    ${!!size && wrapperModifiers[size](theme)}

    ${!!fullWidth && wrapperModifiers.fullWidth()}
  `}
`
