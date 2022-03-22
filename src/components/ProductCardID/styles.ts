import styled, { css } from 'styled-components'
import media from 'styles/styled-media-query'

export const Wrapper = styled.div``

export const Card = styled.article`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    ${media.lessThan('medium')`
      flex-direction: column;
      align-items: center;
    `}
  `}
`

export const Image = styled.div`
  ${({ theme }) => css`
    max-width: 60%;
    width: 100%;
    margin-right: 2rem;
    picture img {
      width: 12.5rem;
      height: 12.5rem;
      border-radius: ${theme.border.radius};
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};

    ${media.lessThan('tablet')`
     font-size: ${theme.font.sizes.large};
      align-items: center;
    `}
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
    margin: ${theme.spacings.xsmall} 0;
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
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 180ms ease-in-out;
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.thirdy};
    margin-bottom: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.medium};
      padding: 0.678rem 0;
    `}

    :hover {
      span {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    div {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: 0.975rem;
      display: flex;
      min-height: 100%;
      svg {
        margin-right: 5px;
      }
    }
    span {
      svg {
        margin: 0 1rem;
        ${media.between('medium', 'tablet')`
        margin: 0 5px 0 0;
        width: 30px;
        `}
      }
      justify-content: center;
      flex-grow: 1;
      align-items: center;
      display: flex;
      padding: 0.975rem;
      font-weight: bold;
      color: ${theme.colors.white};
    }
  `}
`
