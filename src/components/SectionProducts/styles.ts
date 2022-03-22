import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  display: block;
  position: relative;
  margin-bottom: 30px;
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: 1fr;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`
