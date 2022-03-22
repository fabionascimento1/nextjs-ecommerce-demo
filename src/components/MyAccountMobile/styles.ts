import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 10px;
    border-radius: 20px;

    a {
      color: ${theme.colors.black};
      margin-left: 5px;
      font-size: ${theme.font.sizes.xxsmall};
      text-decoration: none;
    }
    svg {
      color: ${theme.colors.primary};
    }
  `}
`
