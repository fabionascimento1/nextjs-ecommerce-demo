import styled from 'styled-components'
import media from 'styles/styled-media-query'

export const HeaderWrapper = styled.div`
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  z-index: 100;

  ${media.greaterThan('tablet')`
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 0.625rem;
  `}
`
