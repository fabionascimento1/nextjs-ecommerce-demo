import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 15px;

    ${media.greaterThan('medium')`
      padding: 0 10px;
    `}
  `}
`
