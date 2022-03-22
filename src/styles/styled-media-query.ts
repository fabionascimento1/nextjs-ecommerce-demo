import { generateMedia } from 'styled-media-query'

interface Breakpoints {
  huge: string
  large: string
  tablet: string
  medium: string
  small: string
}

const media = generateMedia<Breakpoints>({
  huge: '1440px',
  large: '1170px',
  tablet: '1024px',
  medium: '768px',
  small: '450px'
})

export default media
