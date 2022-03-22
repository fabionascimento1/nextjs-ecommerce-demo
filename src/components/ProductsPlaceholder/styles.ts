import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.article`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.border};

    figure {
      width: 100%;
    }

    strong {
      width: 100%;
    }
  `}
`

export const Image = styled.picture`
  ${({ theme }) => css`
    img {
      width: 12.5rem;
      height: 12.5rem;

      margin: auto;
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    min-height: 60px;
    a {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
    }
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
    font-weight: bold;
  `}
`

export const Link = styled.li`
  ${({ theme }) => css`
    display: block;
    > a {
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`
export const Buy = styled.button`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    transition: 180ms ease-in-out;
    font-size: ${theme.font.sizes.xsmall};
    background-color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.xxsmall};
      padding: 0.678rem 0;
    `}

    :hover {
      background-color: ${theme.colors.black};
    }

    div {
      background-color: ${theme.colors.secondary};
      padding: 0.975rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 3px;
      }

      :hover {
        color: ${theme.colors.primary};
      }
    }
    span {
      flex-grow: 1;
      padding: 0.975rem;
      text-align: center;
      font-weight: bold;
      color: ${theme.colors.white};
    }
  `}
`
