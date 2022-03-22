import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 101;
    top: 0;
    left: 0;
    background-color: ${theme.colors.white};

    .buttonClose {
      max-width: 2rem;
      width: 100%;
      margin-right: 1.5rem;
      margin-left: 0.5rem;

      .close {
        cursor: pointer;
        span {
          position: relative;
          display: block;
          max-width: 1.5rem;
          width: 100%;
          height: 0.125rem;
          border-radius: 0.125rem;
          background-color: ${theme.colors.white};
          transition: all 0.3s cubic-bezier(0.82, 0.04, 0.2, 1);
          &:first-child {
            top: 0.125rem;
            max-width: 1.5rem;
            transform: rotate(45deg);
          }
          &:last-child {
            transform: rotate(-45deg);
            top: -0.2.75rem;
          }
        }
      }
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    align-items: center;
    padding: 0.875rem;
  `}
`

export const ListItems = styled.div`
  ${({ theme }) => css`
    padding: 0.875rem;
    ul {
      width: 100%;
      li {
        padding: 0.875rem;
        border-bottom: 1px solid ${theme.colors.border};

        a {
          align-items: center;
          justify-content: space-between;
          display: flex;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 3rem;
          ::after {
            content: ' ➡️ ';
            opacity: 0.6;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.01em;
            color: #9692a3;
          }
        }
      }
    }
  `}
`
