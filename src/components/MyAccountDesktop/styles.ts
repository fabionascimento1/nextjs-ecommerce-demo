import styled, { css } from 'styled-components'
import media from 'styles/styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.black};
      text-decoration: none;
      margin-left: 7px;
    }
    ${media.lessThan('tablet')`
    display: none;
  `}

    svg {
      color: ${theme.colors.primary};
    }
  `}
`
