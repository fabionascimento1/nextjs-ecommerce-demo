import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { MediaMatchProps } from './type'

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
  `}
`
