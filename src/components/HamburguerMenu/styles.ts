import styled, { css } from 'styled-components'
import media from 'styles/styled-media-query'

export const HamburguerWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 2rem;
    width: 100%;
    margin-right: 1.5rem;
    margin-left: 0.5rem;

    ${media.greaterThan('tablet')`
      display: none;
    `}

    .hamburguer__button {
      cursor: pointer;
      span {
        position: relative;
        display: block;
        max-width: 1.5rem;
        width: 100%;
        height: 0.125rem;
        border-radius: 0.125rem;
        background-color: ${theme.colors.primary};
        transition: all 0.3s cubic-bezier(0.82, 0.04, 0.2, 1);
        &:first-child {
          max-width: 2rem;
          margin-bottom: 0.375rem;
        }
      }
    }
  `}
`
