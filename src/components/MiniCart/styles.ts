import styled, { css } from 'styled-components'
import media from 'styles/styled-media-query'

export const CartWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    transition: all 0.3s ease-in-out;

    ${media.lessThan('tablet')`
      max-width: 2.75rem;
      width: 100%;
      margin-left: auto;
      margin-right: 1.25rem;
      transition: all 0.3s ease-in-out;
    `}

    ${media.greaterThan('large')`
      order: 5;
    `}

    .basket {
      color: ${theme.colors.primary};
    }
    .count {
      background: ${theme.colors.secondary};
      color: ${theme.colors.black};
      position: absolute;
      top: -14px;
      right: -7px;
      font-size: 12px;
      padding: 3px 8px;
      border-radius: 30%;
    }
  `}
`
