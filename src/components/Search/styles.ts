import styled, { css } from 'styled-components'
import media from 'styles/styled-media-query'

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    ${media.greaterThan('tablet')`
      margin-top: 0;
      margin-right: 4rem;
      max-width: 42.75rem;
  `}

    ${media.lessThan('tablet')`
      order: 5;
    `}
    

    input {
      width: 100%;
      height: 4rem;
      background: #ffffff;
      border: 1px solid ${theme.colors.border};
      border-radius: 32px;
      outline: none;
      box-shadow: none;
      padding: 2.5rem 0 2.5rem 3.5rem;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: ${theme.colors.primary};
    }
    button {
      background: transparent;
      padding: 0;
      border: 0;
      position: absolute;
      top: 50%;
      left: 0.75rem;
      transform: translateY(-50%);
      color: ${theme.colors.primary};
    }

    .close {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
  `}
`
