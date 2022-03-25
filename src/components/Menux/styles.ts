import styled, { css } from 'styled-components'
import media from 'styles/styled-media-query'

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    position: absolute;
    top: 95px;
    left: 0;
    width: 100%;
    z-index: 100;
    pointer-events: none;
    transform: translateY(1.25rem);
    transition: all 0.3s cubic-bezier(0.82, 0.04, 0.2, 1);
    padding: 1rem 1rem;

    ${media.lessThan('tablet')`
      display: none;
    `}

    .list {
      list-style: none;
      position: relative;
      display: flex;
      justify-content: center;

      .item {
        border-bottom: 0;
        margin-right: 2.25rem;
        color: ${theme.colors.white};

        a {
          color: ${theme.colors.white};
        }
      }
    }
  `}
`
